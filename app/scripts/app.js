'use strict';


/**
 * @ngdoc overview
 * @name angularMultiVersionExampleApp
 * @description
 * # angularMultiVersionExampleApp
 *
 * Main module of the application.
 */


(function(angular){
    $(function(){
        angular
            .module('angularMultiVersionExampleApp', [
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
            });
    });
});(angularVersions['1.2.25']);
