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
                    controller: 'MainCtrl',
                    activetab: 'main'
                })
                .when('/virus', {
                    controller: 'NavigateCtrl',
                    activetab: 'virus',
                    templateUrl: 'views/nothing.html'
                })
                .when('/bacteria', {
                    controller: 'NavigateCtrl',
                    activetab: 'bacteria',
                    templateUrl: 'views/nothing.html'
                })
                .when('/fungi', {
                    controller: 'NavigateCtrl',
                    activetab: 'fungi',
                    templateUrl: 'views/nothing.html'
                })
                .otherwise({
                    redirectTo: '/'
                });
        })

        .run(function($rootScope, $route){
            $rootScope.myangular = angular;
            $rootScope.route = $route;
        })
        .controller('MainCtrl', function ($scope) {

        })
        .controller('NavigateCtrl', function ($scope, $window, $location){
            $window.location = $window.location;
        })

        angular.element($('#host')).ready(function(){
            angular.bootstrap($('#host'), ['hostApp']);
        });

    })(angularVersions['1.3.0-rc.3']);
});
