

var app = angular.module("PatientInfo");

app.controller("MainController", function ($scope) {
  //  PatientInfo.deployed().then(function(contract) {
        $scope.balanceInEther = web3.fromWei(web3.eth.getBalance(contractInstance.address).toNumber(), "ether");

        $scope.contract_address = contractInstance.address;
        $scope.contract_abi = JSON.stringify(contractInstance.contract.abi);

        $scope.accounts = {address: web3.eth.accounts[2], balance:web3.fromWei(web3.eth.getBalance(web3.eth.accounts[0]).toNumber(), "ether")};
//web3.eth.sendTransaction({from: web3.eth.accounts[0], to: contract.address, value: web3.toWei(50, "ether")});//, function(error, result) { console.log(error); console.log(result);});
        console.log($scope);
        return this;
        
  //  });


});