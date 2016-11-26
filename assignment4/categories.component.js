(function(){
  'use strict';
  angular.module('MenuApp')
  .component('catCom',{
    templateUrl:"home.html",
    bindings:{
      items:'<'
    }
  });


})()
