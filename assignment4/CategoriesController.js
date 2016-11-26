(function(){
'use strict';

angular.module('MenuApp')
.controller('CategoriesController',CategoriesController);


  CategoriesController.$inject=['items']
  function CategoriesController(items){
    var cat=this;
    console.log(items);
    cat.items=items;
  }
})()
