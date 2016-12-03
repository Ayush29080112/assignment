(function(){
  'use strict';

  angular.module('common')
  .service('SignUpService',SignUpService);

SignUpService.$inject=['$http', 'ApiPath']
  function SignUpService($http,ApiPath){
    var service=this;
    var users=[];
    service.addUser=function(user){

    return  $http.get(ApiPath+"/menu_items/"+user.shortName+".json").then(function (response) {
        users.push(user);
        console.log(users[0]);
        return "Your information has been saved.";
      },function(){
        return "No such menu number exists."
      })
    };
    service.getUser=function(){
      console.log('In Get User');
      console.log(users[0]);
      return users[0];
    }
  }
})()
