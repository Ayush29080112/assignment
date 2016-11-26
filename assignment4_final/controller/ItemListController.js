(function(){
  'use strict';
  angular.module('MenuApp')
  .controller('ItemListController', ItemListController);

ItemListController.$inject=['items'];
function ItemListController(items){
  var subList=this;
  subList.items=items.data.menu_items;
}
})()
