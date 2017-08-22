"use strict";

var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

var app = angular.module("PatientInfo", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/login.html',
    controller: 'loginController',
    resolve:{
        app: function ($q, $timeout) {
          var defer = $q.defer;
          $timeout(function () {
            defer.resolve; 
          }, 2000);
          return defer.promise;
        }
      }
  }).when('/showDetails', {
    templateUrl: 'views/showDetails.html',
    controller: 'showDetailsController'
  }).when('/addPatient', {
    templateUrl: 'views/addPatient.html',
    controller: 'addPatientController'
  }).when('/contractInfo',{
     templateUrl: 'views/main.html',
    controller: 'MainController',
    resolve:{
        app: function ($q, $timeout) {
          var defer = $q.defer;
          $timeout(function () {
            defer.resolve; 
          }, 2000);
          return defer.promise;
        }
      }
  }).otherwise({redirectTo: '/'});
});