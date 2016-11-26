(function(){
  'use strict';
  angular.module('MenuApp')
  .component('itemList',{
    templateUrl: 'templates/itemListTemplate.html',
    bindings: {
      items: '<'
    }
  })
})()
