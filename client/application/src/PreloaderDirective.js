angular
    .module("news-aggregator-app")
    .directive('mnaPreloader', ['$log', function($log) {
        return {
            restrict: 'E',
            template: '<img src="img/preloader.gif"/>',
            //transclude: true,
            replace: true,
            scope: {
                isDataLoading: "@isDataLoading"
            },
            link: function link(scope, element, attrs, controller, transcludeFn) {
                scope.$watch("isDataLoading", function(newValue){
                    if (newValue === "true"){
                        //todo try not to use jquery
                        $(element[0]).show();
                    } else {
                        $(element[0]).hide();
                    }
                    //$log.log("element inside directive: " + element[0]);
                    //$log.log("isDataLoading inside directive: " + newValue, oldValue);
                });
            }
        };
    }]);
