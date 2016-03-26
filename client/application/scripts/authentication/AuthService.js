/**
 * Created by hartex on 26.03.16.
 */
angular
    .module("news-aggregator-app")
    .factory("AuthService", ["$log", "$http",
        function ($log, $http) {
            return {
                login: function () {
                    var req = {
                        method: 'POST',
                        url: ''
                    };
                    return $http(req)
                        .then(
                            function (successResp) {
                                return successResp;
                            },
                            function (errorResp) {
                                $log.error("Error during login" + errorResp);
                            });
                },
                register: function () {
                    var req = {
                        method: 'POST',
                        url: ''
                    };
                    return $http(req)
                        .then(
                            function (successResp) {
                                return successResp;
                            },
                            function (errorResp) {
                                $log.error("Error during registration" + errorResp);
                            });
                }
            }
        }]);