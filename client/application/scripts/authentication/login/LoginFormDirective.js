/**
 * Created by hartex
 */
angular
    .module("news-aggregator-app")
    .directive('mnaLoginForm', ['$log', function ($log) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/authentication/login/login-form.tmpl.html',
            //transclude: true,
            replace: true,
            /*scope: {
             isDataLoading: "@isDataLoading"
             },*/

            /*link: function link(scope, element, attrs, controller, transcludeFn) {

             }*/
        };
    }]);