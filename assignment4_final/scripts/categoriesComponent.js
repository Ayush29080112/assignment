(function(){
  'use strict';
  angular.module('MenuApp')
  .component('categoryList',{
    templateUrl: 'templates/categoryListTemplate.html',
    bindings: {
      items: '<'
    }
  })
})()
