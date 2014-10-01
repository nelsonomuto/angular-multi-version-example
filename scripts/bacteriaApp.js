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
        angular.module('bacteriaApp', [
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'ngTouch'
        ])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/bacteria', {
                    templateUrl: 'views/bacteria.html',
                    controller: 'BacteriaCtrl',
                    activetab: 'bacteria'
                })
                .otherwise({
                    templateUrl: 'views/nothing.html'
                });
        })
        .controller('BacteriaCtrl', function ($scope) {
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];

            $scope.myangular = angular;
        })
        .controller('BacteriaCtrl', function ($scope) {
            $scope.myangular = angular;
        });
        angular.element($('#bacteria')).ready(function(){
//            angular.bootstrap($('#bacteria'), ['hostApp']); //hostApp unavailable, has no knowledge of host
            angular.bootstrap($('#bacteria'), ['bacteriaApp']);
        });

    })(angularVersions['1.2.25']);
});
