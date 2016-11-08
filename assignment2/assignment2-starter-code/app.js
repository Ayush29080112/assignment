(function(){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var buyController=this;
buyController.items = ShoppingListCheckOffService.getToBuyItems();

buyController.boughtitems = ShoppingListCheckOffService.getBoughtItems();
      buyController.removeItem = function (item,itemIndex) {
        ShoppingListCheckOffService.addItem(item);
        ShoppingListCheckOffService.removeItem(itemIndex);
      };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){

    var alreadyBought=this;

    alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
  };

  function ShoppingListCheckOffService(){
    var service=this;

    var toBuy = [
      { name: "cookies", quantity: 10 },
      { name: "Chips", quantity: 10 },
      { name: "Chocloates", quantity: 10 },
      { name: "Candy", quantity: 10 },
      { name: "Ice cream", quantity: 10 }
    ];

    var bought = [];


    service.removeItem = function (itemIdex) {
      toBuy.splice(itemIdex, 1);
    };

    service.addItem = function (item) {
      bought.push(item);
    };

    service.getToBuyItems = function () {
      return toBuy;
    };

    service.getBoughtItems = function () {
      return bought;
    };
  }
})()
