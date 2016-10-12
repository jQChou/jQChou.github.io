demo.config(["$stateProvider", "$locationProvider", "$urlRouterProvider", function ($stateProvider, $locationProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/pageIndex");
    $stateProvider.state('pageIndex', {
            url: '/pageIndex',
            templateUrl: 'common/templete/pageIndex.html?rev=4a3e0be9ff'
        })
        .state('pageIndex.page1', {
            url: '/page1',
            templateUrl: 'page1/page1.html?rev=7d5699c6b1',
            controller: 'page1Ctrl'
        }).state('pageIndex.page2', {
            url: '/page2',
            templateUrl: 'page2/page2.html?rev=b28fa609a0',
            controller: 'page2Ctrl'
        });
}])