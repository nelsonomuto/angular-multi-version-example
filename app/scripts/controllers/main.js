'use strict';

/**
 * @ngdoc function
 * @name angularMultiVersionExampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularMultiVersionExampleApp
 */
(function(angular){
    angular.module('hostApp')
      .controller('MainCtrl', function ($scope) {
        $scope.awesomeThings = [
          'HTML5 Boilerplate',
          'AngularJS',
          'Karma'
        ];

        $scope.myangular = angular;
    });
})(angularVersions['1.2.25']);