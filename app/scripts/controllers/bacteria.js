'use strict';

/**
 * @ngdoc function
 * @name angularMultiVersionExampleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularMultiVersionExampleApp
 */
angular.module('angularMultiVersionExampleApp')
    .controller('BacteriaCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.myangular = angular;
    });
