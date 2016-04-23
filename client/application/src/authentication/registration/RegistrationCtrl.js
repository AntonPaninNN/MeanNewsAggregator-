/**
 * Created by hartex on 25.03.16.
 */
angular
    .module("news-aggregator-app")
    .controller('RegistrationCtrl', ["$log", "AuthService",
        function ($log, AuthService) {
            var self = this;
            self.register = function(){
                $log.log(self.newUser);
            }
        }]);