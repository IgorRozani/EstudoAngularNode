'use strict';

var estudoAngularNodeApp = angular.module('estudoAngularNodeApp',['ngRoute'])
  .config(function($routeProvider){
    $routeProvider.when('/lista', {
      templateUrl: 'templates/EstudoController.html',
      controller: 'EstudoController'
    });
    $routeProvider.when('/home', {
      templateUrl:'templates/HomeController.html',
      controller: 'HomeController'
    });
    $routeProvider.otherwise({
      redirectTo: '/home'
    });
});
