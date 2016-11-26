(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/main-list');

  // *** Set up UI states ***
  $stateProvider


  // Premade list page
  .state('mainList', {
    url: '/main-list',
    templateUrl: 'templates/categorylist.html',
    controller: 'CategoryListController as mainList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })
  .state('subList', {
    url: '/subList/{param1}',
    templateUrl: 'templates/itemlist.html',
    controller: 'ItemListController as subList',
    resolve: {
      items: ['$stateParams','MenuDataService', function ($stateParams,MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.param1);
      }]
    }
  });
}

})();
