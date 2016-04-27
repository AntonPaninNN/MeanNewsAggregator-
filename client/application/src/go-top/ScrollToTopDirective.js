/**
 * Created by hartex
 */
angular
    .module("news-aggregator-app")
    .directive('mnaScrollToTop', ['$log', '$window', function ($log, $window) {
        return {
            restrict: 'E',
            template: '<div class="mna-scrolltotop"><i class="fa fa-angle-double-up fa-4x"></i></div>',
            replace: true,
            link: function link(scope, element, attrs, controller, transcludeFn) {

                var $j = angular.element;

                $j($window).on("scroll", function () {
                    if ($j(this).scrollTop() > 100) {
                        // appearance
                        $j(element).stop().animate({
                            bottom: '35px'
                        }, 500)
                    } else {
                        // disappearance
                        $j(element).stop().animate({
                            bottom: '-100px'
                        })
                    }
                });

                $j(element).on("click", function () {
                    $j('body').stop().animate({
                        scrollTop: 0
                    }, 500 /*function () {
                        $j(element).stop().animate({
                            top: '-100px'
                        }, 500);
                    }*/);
                });
            }
        };
    }]);
