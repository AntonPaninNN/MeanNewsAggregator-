/**
 * Created by hartex
 */
angular
    .module("news-aggregator-app")
    .directive('mnaMenu', ['$log', function ($log) {
        return {
            restrict: 'E',
            templateUrl: 'src/menu/menu.tmpl.html',
            scope: {},
            link: function link(scope, element, attrs, controller, transcludeFn) {

            },
            controller: ['$scope', 'UserService', '$location', '$log',
                function ($scope, UserService, $location, $log) {
                    function loadCurrentUserData() {
                        UserService.getCurrentUserData()
                            .then(function (userData) {
                                //$log.log(newsData);
                                $scope.currentUser = userData;
                            });
                    }
                    loadCurrentUserData();

                    $scope.logOut = function () {
                        //todo clear user session
                        $location.path('/auth');
                    };

                    $scope.goHome = function () {
                        $location.path('/news-feed');
                    };

                    $scope.goToSettings = function () {
                        $location.path('/settings');
                    };

                    $scope.search = function () {
                        //todo add search functionality here
                        $location.path('/search-results');
                    }
                }]
        };
    }]);