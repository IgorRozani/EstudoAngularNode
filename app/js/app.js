'use strict';

var estudoAngularNodeApp = angular.module('estudoAngularNodeApp',['ngRoute'])
  .config(function($routeProvider){
    $routeProvider.when('/clientes', {
      templateUrl: 'templates/ClienteController.html',
      controller: 'ClienteController'
    });
    $routeProvider.when('/home', {
      templateUrl:'templates/HomeController.html',
      controller: 'HomeController'
    });
    $routeProvider.otherwise({
      redirectTo: '/home'
    });
});
