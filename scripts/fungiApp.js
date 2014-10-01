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
        angular.module('hostApp', [
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
                .when('/virus', {
                    templateUrl: 'views/virus.html',
                    controller: 'VirusCtrl'
                })
                .when('/bacteria', {
                    templateUrl: 'views/bacteria.html',
                    controller: 'BacteriaCtrl'
                }).when('/fungi', {
                    templateUrl: 'views/fungi.html',
                    controller: 'FungiCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        })
        .controller('FungiCtrl', function ($scope) {
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];

            $scope.myangular = angular;
        })
        .controller('BacteriaCtrl', function ($scope) {
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];

            $scope.myangular = angular;
        })
        .controller('MainCtrl', function ($scope) {

                $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];

            $scope.myangular = angular;
        })
        .controller('VirusCtrl', function ($scope) {
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];

            $scope.myangular = angular;
        });

        angular.element($('#host')).ready(function(){
            angular.bootstrap($('#host'), ['hostApp'])
        });

    })(angularVersions['1.2.25']);
});
