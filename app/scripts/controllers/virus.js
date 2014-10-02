'use strict';

/**
 * @ngdoc function
 * @name angularMultiVersionExampleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularMultiVersionExampleApp
 */
(function(angular){
    angular.module('hostApp')
        .controller('VirusCtrl', function ($scope) {
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];

            $scope.myangular = angular;
    });
})(angularVersions['1.2.25']);
