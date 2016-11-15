(function(){
  'use strict';
  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController',NarrowItDownController)
  .controller('ShoppingListDirectiveController',ShoppingListDirectiveController)
  .service('MenuSearchService',MenuSearchService)
  .directive('foundItems',FoundItems)
  .constant('ApiBasePath','https://davids-restaurant.herokuapp.com/menu_items.json')
;


function FoundItems(){
  var ddo={
    templateUrl:"narrow.html",
    scope: {
      foundItem: '<',
      onRemove: '&'
    },
    // },
    controller: ShoppingListDirectiveController,
    controllerAs: 'list',
    bindToController: true
  }
  return ddo;
}
function ShoppingListDirectiveController(){
  var service=this;
}
NarrowItDownController.$inject=['MenuSearchService']
  function NarrowItDownController(MenuSearchService){
    var narrow=this;

    narrow.onclick=function(searchItem){
        narrow.found=[];
      var promise=MenuSearchService.getMatchedMenuItems(narrow.searchItem);
          promise.then(function(response){
          var items=response.data;

            for(var i=0;i<items.menu_items.length;i++){
                          if(items.menu_items[i].description.toLowerCase().indexOf(searchItem)!=-1){
                               narrow.found.push(items.menu_items[i])
                             }
                         }
            }).catch(function(response){
            })
    }

    narrow.removeItem=function(index){
      narrow.found.splice(index,1);
    }
  }


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http,ApiBasePath){
     var service=this;

     service.getMatchedMenuItems=function(searchItem){
       var response = $http({
            method: "GET",
            url: (ApiBasePath)
          });
          return response;
     }
    //    return $http({
    //                 method: "GET",
    //                 url: (ApiBasePath)
    //               }).then(function(result){
    //                 var foundItems=[];
    //                 for(var i=0;i<result.data.length;i++){
    //                   if(result.data[i].description.indexOf(searchItem)!=-1){
    //                     foundItems.push(result.data[i])
    //                   }
    //                 }
    //                 return foundItems;
    //               });
    //  }

  }
})()
