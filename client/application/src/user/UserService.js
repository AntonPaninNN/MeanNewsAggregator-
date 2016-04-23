/**
 * Created by hartex
 */
angular
    .module("news-aggregator-app")
    .factory("UserService", ["$log", "$http",
        function ($log, $http) {
            return {
                getCurrentUserData: function(){
                    var req = {
                        method: 'GET',
                        url: 'src/user-data-sample.json'
                    };
                    return $http(req)
                        .then(function (successResp) {
                            return successResp.data;
                        }, function (errorResp) {
                            $log.error("Error while fetching news " + errorResp);
                        });
                }

            }
        }]);