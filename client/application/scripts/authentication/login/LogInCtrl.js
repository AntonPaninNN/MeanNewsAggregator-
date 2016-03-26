/**
 * Created by hartex on 25.03.16.
 */
angular
    .module("news-aggregator-app")
    .controller('LogInCtrl', ["$log", "AuthService",
        function ($log, AuthService) {
            var self = this;
            self.login = function(){
                //todo do some login logic here
                $log.log(self.user);
            }
        }]);