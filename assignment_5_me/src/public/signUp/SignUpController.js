(function(){


  angular.module('public')
  .controller('SignUpController',SignUpController);

SignUpController.$inject=['SignUpService'];

  function SignUpController(SignUpService){
        var signUp=this;
       signUp.message="";
        signUp.addUser=function(){
          SignUpService.addUser(signUp.user).then(function(response){
            console.log(response);
            signUp.message=response;
          })
        };
  }
})()
