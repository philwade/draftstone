'use strict';

/**
 * @ngdoc function
 * @name draftstoneApp.controller:DraftCtrl
 * @description
 * # DraftCtrl
 * Controller of the draftstoneApp
 */
angular.module('draftstoneApp')
  .controller('DraftCtrl', function ($scope) {
	$scope.heroOptions = [];
  	var heros = [
		'Rogue',
		'Mage',
		'Hunter',
		'Druid',
		'Shaman',
		'Paladin',
		'Priest',
		'Warrior',
		'Warlock',
	];
	var hero;

	for(var i = 0; i < 3;i++)
	{
		while(hero == null || $scope.heroOptions.indexOf(hero) != -1)
		{
			hero = heros[getRandom(0, 9)];
		}

		$scope.heroOptions.push(hero);
	}

		function getRandom(min, max) {
			return Math.round(Math.random() * (max - min) + min);
		}
  });
