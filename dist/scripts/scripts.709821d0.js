"use strict";$(function(){!function(a){a.module("hostApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",activetab:"main"}).when("/virus",{controller:"NavigateCtrl",activetab:"virus",templateUrl:"views/nothing.html"}).when("/bacteria",{controller:"NavigateCtrl",activetab:"bacteria",templateUrl:"views/nothing.html"}).when("/fungi",{controller:"NavigateCtrl",activetab:"fungi",templateUrl:"views/nothing.html"}).otherwise({redirectTo:"/"})}]).run(["$rootScope","$route",function(b,c){b.myangular=a,b.route=c}]).controller("MainCtrl",["$scope",function(){}]).controller("NavigateCtrl",["$scope","$window","$location","$route",function(a,b,c,d){b.location=b.location;var e=d.current.activetab;$("div.infection").removeClass("active"),$("#"+e).addClass("active")}]),a.element($("#host")).ready(function(){a.bootstrap($("#host"),["hostApp"])})}(angularVersions["1.3.0-rc.3"])}),$(function(){!function(a){a.module("bacteriaApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/bacteria",{templateUrl:"views/bacteria.html",controller:"BacteriaCtrl",activetab:"bacteria"}).otherwise({templateUrl:"views/nothing.html"})}]).controller("BacteriaCtrl",["$scope",function(b){b.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],b.myangular=a}]).controller("BacteriaCtrl",["$scope",function(b){b.myangular=a}]),a.element($("#bacteria")).ready(function(){a.bootstrap($("#bacteria"),["bacteriaApp"])})}(angularVersions["1.2.25"])}),$(function(){!function(a){a.module("virusApp",["ngResource","ngSanitize"]).config(["$routeProvider",function(a){a.when("/virus",{templateUrl:"views/virus.html",controller:"virusCtrl",activetab:"virus"}).otherwise({templateUrl:"views/nothing.html"})}]).controller("virusCtrl",["$scope",function(b){b.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],b.myangular=a}]).controller("virusCtrl",["$scope",function(b){b.myangular=a}]),a.element($("#virus")).ready(function(){a.bootstrap($("#virus"),["virusApp"])})}(angularVersions["1.0.7"])}),$(function(){!function(a){a.module("hostApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/virus",{templateUrl:"views/virus.html",controller:"VirusCtrl"}).when("/bacteria",{templateUrl:"views/bacteria.html",controller:"BacteriaCtrl"}).when("/fungi",{templateUrl:"views/fungi.html",controller:"FungiCtrl"}).otherwise({redirectTo:"/"})}]).controller("FungiCtrl",["$scope",function(b){b.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],b.myangular=a}]).controller("BacteriaCtrl",["$scope",function(b){b.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],b.myangular=a}]).controller("MainCtrl",["$scope",function(b){b.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],b.myangular=a}]).controller("VirusCtrl",["$scope",function(b){b.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],b.myangular=a}]),a.element($("#host")).ready(function(){a.bootstrap($("#host"),["hostApp"])})}(angularVersions["1.2.25"])});