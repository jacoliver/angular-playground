'use strict';

angular.module('F1FeederApp', [
  'F1FeederApp.controllers',
  'F1FeederApp.services',
  'F1FeederApp.tvservices',
  'F1FeederApp.tvcontroller',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when("/popular", {templateUrl: "partials/popularList.html", controller: "tvController"}).
	when("/drivers", {templateUrl: "partials/drivers.html", controller: "driversController"}).
	when("/drivers/:id", {templateUrl: "partials/driver.html", controller: "driverController"}).
	otherwise({redirectTo: '/drivers'});
}]);
