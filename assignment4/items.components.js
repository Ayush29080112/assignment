(function(){
  'use strict';
  angular.module('data')
  .component('items',{
    templateUrl:"item_category.html",
    bindings:{
      items:'<'
    }
  });

})()
