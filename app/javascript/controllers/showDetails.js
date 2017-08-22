"use strict";
var app = angular.module("PatientInfo");


app.controller('showDetailsController', function($scope){
   
$scope.showData=function(address){
  //  PatientInfo.deployed().then(function(instance){
        contractInstance.showData(address,{from: web3.eth.defaultAccount, gas: 200000}).then(function(result){
                $scope.address=address;
                console.log(result);
//                if(result[1]==0)
//                    throw "not authorize.";
                $scope.name=result[0];
                $scope.dob=result[1];
                $scope.location=result[2];
                $scope.transfer_success = true;
                $scope.$apply();
            }).catch(function (error) {
                console.error(error);
                $scope.has_errors = error;
                $scope.$apply();            
            });
     //   });
            console.log($scope);
    return this;

    } 
});
