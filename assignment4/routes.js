(function(){
  'use strict';
  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function RoutesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/categories');

  $stateProvider

    // Home page
    .state('categories', {
      url: '/categories',
      templateUrl: 'categories.html',
      controller:'CategoriesController as cat',
      resolve:{
        items: ['MenuDataService', function (MenuDataService) {
          var promise=MenuDataService.getAllCategories();
          return promise.data;
          }]
        }
    });
}

})()
