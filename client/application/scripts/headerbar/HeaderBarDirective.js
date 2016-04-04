/**
 * Created by hartex
 */
angular
    .module("news-aggregator-app")
    .directive('headerBar', ['$log', function($log) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/headerbar/headerbar.tmpl.html',
            scope: {},
            link: function link(scope, element, attrs, controller, transcludeFn) {

            },
            controller: ['$scope', 'UserService', function($scope, UserService) {
                function loadCurrentUserData() {
                    UserService.getCurrentUserData()
                        .then(function (userData) {
                            //$log.log(newsData);
                            $scope.currentUser = userData;
                        });
                }
                loadCurrentUserData();
            }]
        };
    }]);