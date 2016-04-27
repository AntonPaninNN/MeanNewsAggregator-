//firstly npm install all the plugins

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        'http-server': {
            'dev': {
                // the server root directory
                root: "./",
                port: 8282,
                host: "127.0.0.1",
                showDir: true,
                autoIndex: true,
                // server default file extension
                ext: "html",
                // run in parallel with other tasks
                runInBackground: true,
                // tell grunt task to open the browser
                openBrowser: false
            }
        },

        watch: {
            options: {
                livereload: true,
                livereloadOnError: false
            },
            scripts: {
                files: 'client/application/src/**/*.js',
                tasks: 'concat'
            },
            sass: {
                files: ['client/application/**/*.scss'],
                tasks: ['sass', 'concat_css']
            },
            livereload: {
                options: { livereload: true },
                files: ['distr/final/**/*']
            },
            html: {
                files: 'client/application/src/**/*.html'
            }
        },

        sass: {
            options: {
                outputStyle: 'expanded',
                sourceMap: true,
                precision: 5
            },
            dist: {
                files: {
                    'distr/custom/main.css': 'client/application/styles/main.scss'
                }
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'client/lib/jQuery/dist/jquery.js',
                    'client/lib/angular/angular.js',
                    'client/lib/angular-route/angular-route.js',
                    'client/application/src/**/*.js'
                ],
                dest: 'distr/main.js'
            }
        },

        concat_css: {
            options: {},
            all: {
                src: [
                    "client/lib/pure/pure-min.css",
                    "client/lib/pure/grids-responsive-min.css",
                    /* "client/lib/font-awesome/css/font-awesome.min.css", */
                    "distr/custom/main.css"
                ],
                dest: "distr/final/main.css"
            }
        },

// todo: i haven't considered usefulness of that tasks yet

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'public/dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },

        eslint: {
            target: [
                'Gruntfile.js',
                'app/**/*.js',
                'public/**/*.js',
                'lib/**/*.js',
                './*.js',
                'spec/**/*.js'
            ]
        },

        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            dist: {
                files: {
                    'public/dist/style.min.css': 'public/style.css'
                }
            }
        }
    });

    ///////////////////////////////////////////
    // All used Grunt plugins
    ///////////////////////////////////////////

    // watch task (served by http-server) and its dependent tasks, for frontend development
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-sass');

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-eslint');
    //grunt.loadNpmTasks('grunt-nodemon');

    ///////////////////////////////////////////
    // Main Grunt tasks
    ///////////////////////////////////////////

    grunt.registerTask('frontDev', [
        'http-server',
        'watch'
    ]);

    grunt.registerTask('test', [
        'eslint',
        // todo: add karma tests
        'karma-test'
    ]);

    grunt.registerTask('build', [
        'concat',
        'uglify',
        'cssmin'
    ]);

    grunt.registerTask('prepare-to-commit', [
        'test',
        'build'
    ]);
};
