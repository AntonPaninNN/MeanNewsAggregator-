/**
 * Created by hartex on 12.03.16.
 */
angular
    .module("news-aggregator-app")
    .controller('NewsFeedCtrl', ["NewsService", "$log", "$timeout",
        function (NewsService, $log, $timeout) {
            var self = this;
            function loadNews() {
                self.isDataLoading = true;
                NewsService.getAllNews()
                    .then(function (newsData) {
                            //$log.log(newsData);
                            self.isDataLoading = false;
                            self.allNews = newsData;
                        });
            }
            loadNews();
        }]);