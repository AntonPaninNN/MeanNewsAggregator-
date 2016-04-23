/**
 * Created by hartex
 */
angular
    .module("news-aggregator-app")
    .controller('AuthCtrl', ["$log",
        function ($log) {
            var self = this;
            self.viewType = "login";
            self.switchView = function(type){
                self.viewType = type;
                $log.log(self.viewType);
            }
        }]);