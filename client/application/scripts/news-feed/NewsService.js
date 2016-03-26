/**
 * Created by hartex on 12.03.16.
 */
angular
    .module("news-aggregator-app")
    .factory("NewsService", ["$log", "$http",
        function ($log, $http) {
            return {
                getAllNews: function () {
                    var req = {
                        method: 'GET',
                        url: 'scripts/news-sample.json',
                        transformResponse: function(data, headers){
                            //todo here comes data transformation, especially news text transformation
                            return JSON.parse(data);
                        }
                    };
                    return $http(req)
                        .then(function (successResp) {
                            //$log.log(successResp.data.all_news);
                            return successResp.data.all_news;
                        }, function (errorResp) {
                            $log.error("Error while fetching news " + errorResp);
                        });
                }
            }
        }]);