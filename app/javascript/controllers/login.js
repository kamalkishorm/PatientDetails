"use strict";
var app = angular.module("PatientInfo");
var contractInstance;
app.controller('loginController',function($scope){
	$scope.accounts = web3.eth.accounts;
	web3.eth.defaultAccount=web3.eth.accounts[0];
	console.log(web3.eth.defaultAccount);
	   PatientInfo.deployed().then(function(instance){
	   	contractInstance=instance;
	   });

	$scope.loginFunc=function(address,pass){
		var accountsCount = web3.eth.accounts.length;
		var flag=0;
		for(var i=0;i<=accountsCount;i++)
			if(address+pass +''==web3.eth.accounts[i]+i+''){
				userLogin=address;
				flag=1;
				break;
			}

		if(flag==1){
			$scope.transfer_success = true;
			$scope.message="You are login.";
			web3.eth.defaultAccount=address;
			$scope.account=address;
			$scope.balance= web3.fromWei(web3.eth.getBalance(address).toNumber(), "ether");
		}else{
			$scope.login_errors = "Wrong Password!";
		}

	};
});