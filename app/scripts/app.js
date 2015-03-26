'use strict';

/**
 * @ngdoc overview
 * @name draftstoneApp
 * @description
 * # draftstoneApp
 *
 * Main module of the application.
 */
angular
	.module('draftstoneApp', [
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch'
	])
	.config(function ($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'MainCtrl'
		})
		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'AboutCtrl'
		})
		.when('/draft', {
			templateUrl: 'views/draft.html',
			controller: 'DraftCtrl',
		})
		.otherwise({
			redirectTo: '/'
		});
	});
