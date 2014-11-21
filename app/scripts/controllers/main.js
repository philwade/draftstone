'use strict';

/**
 * @ngdoc function
 * @name draftstoneApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the draftstoneApp
 */
angular.module('draftstoneApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
