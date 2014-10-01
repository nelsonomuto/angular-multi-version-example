'use strict';


/**
 * @ngdoc overview
 * @name angularMultiVersionExampleApp
 * @description
 * # angularMultiVersionExampleApp
 *
 * Main module of the application.
 */


$(function(){
    (function(angular){
        angular.module('virusApp', [
            'ngResource',
            'ngSanitize'
        ])
            .config(function ($routeProvider) {
                $routeProvider
                    .when('/virus', {
                        templateUrl: 'views/virus.html',
                        controller: 'virusCtrl',
                        activetab: 'virus'
                    })
                    .otherwise({
                        templateUrl: 'views/nothing.html'
                    });
            })
            .controller('virusCtrl', function ($scope) {
                $scope.awesomeThings = [
                    'HTML5 Boilerplate',
                    'AngularJS',
                    'Karma'
                ];

                $scope.myangular = angular;
            })
            .controller('virusCtrl', function ($scope) {
                $scope.myangular = angular;
            });
        angular.element($('#virus')).ready(function(){
//            angular.bootstrap($('#virus'), ['hostApp']); //hostApp unavailable, has no knowledge of host
            angular.bootstrap($('#virus'), ['virusApp']);
        });

    })(angularVersions['1.0.7']);
});
