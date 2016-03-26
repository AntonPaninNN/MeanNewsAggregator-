/**
 * Created by hartex on 26.03.16.
 */
angular
    .module("news-aggregator-app")
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/news-feed', {
                    templateUrl: 'scripts/news-feed/news-feed.tmpl.html',
                    controller: 'NewsFeedCtrl',
                    controllerAs: 'feedCtrl'
                })
                .when('/auth', {
                    templateUrl: 'scripts/authentication/auth.tmpl.html',
                    controller: 'AuthCtrl',
                    controllerAs: 'authCtrl'
                })
                .otherwise({
                    redirectTo: '/news-feed'
                });
        }]);