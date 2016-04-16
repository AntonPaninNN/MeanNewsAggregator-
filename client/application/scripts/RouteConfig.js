/**
 * Created by hartex
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
                .when('/settings', {
                    templateUrl: 'scripts/settings/user-settings.tmpl.html',
                    controller: 'UserSettingsCtrl',
                    controllerAs: 'settingsCtrl'
                })
                .when('/search-results', {
                    templateUrl: 'scripts/search/search-results.tmpl.html',
                    controller: 'SearchResultsCtrl',
                    controllerAs: 'searchCtrl'
                })
                .otherwise({
                    redirectTo: '/news-feed'
                });
        }]);