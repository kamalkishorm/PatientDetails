"use strict";
var app = angular.module("PatientInfo");


app.controller("addPatientController", function($scope) {

    $scope.addPatient=function(address,name,location,dob){
      //  PatientInfo.deployed().then(function(instance){
            contractInstance.addPatient(address,name,location,dob,{from: web3.eth.defaultAccount, gas: 200000}).then(function(result){
               console.log(result);
               $scope.transfer_success = true;
              // $scope.acc=web3.personal.newAccount(name);
                $scope.$apply();
            }).catch(function (error) {
                console.error(error);
                $scope.has_errors = error;
                $scope.$apply(); 
            });
     //   });
                    console.log($scope);
        return this;
    };
//    var new_accountsGen=web3.eth.accounts.create();
//    $scope.new_address=new_accountsGen.address;
//    $scope.new_privateKey=new_accountsGen.privateKey;
    console.log($scope);

});