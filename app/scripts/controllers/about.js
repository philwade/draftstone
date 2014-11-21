'use strict';

/**
 * @ngdoc function
 * @name draftstoneApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the draftstoneApp
 */
angular.module('draftstoneApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
