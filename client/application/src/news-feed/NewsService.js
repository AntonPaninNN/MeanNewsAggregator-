/**
 * Created by hartex
 */
angular
    .module("news-aggregator-app")
    .factory("NewsService", ["$log", "$http",
        function ($log, $http) {
            return {
                getAllNews: function () {
                    var req = {
                        method: 'GET',
                        url: 'src/news-sample.json',
                        transformResponse: function(data, headers){
                            //todo here comes data transformation, especially news text transformation
                            return JSON.parse(data);
                        }
                    };
                    return $http(req)
                        .then(function (successResp) {
                            return successResp.data.all_news;
                        }, function (errorResp) {
                            $log.error("Error while fetching news " + errorResp);
                        });
                },
                //todo getting WS connection and subscribing for a news data
                getWS: function () {
                    /*var socket = io('http://localhost');
                    socket.on('news', function (data) {
                        console.log(data);
                    });*/
                }
            }
        }]);