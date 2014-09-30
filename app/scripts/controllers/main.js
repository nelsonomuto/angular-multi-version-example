'use strict';

/**
 * @ngdoc function
 * @name angularMultiVersionExampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularMultiVersionExampleApp
 */
angular.module('angularMultiVersionExampleApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
