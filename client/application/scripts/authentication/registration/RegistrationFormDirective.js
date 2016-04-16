/**
 * Created by hartex
 */
angular
    .module("news-aggregator-app")
    .directive('mnaRegistrationForm', ['$log', function ($log) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/authentication/registration/registration-form.tmpl.html',
            replace: true
        };
    }]);