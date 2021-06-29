var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(function($routeProvider){
    $routeProvider
    .when('/home',{
        templateUrl : 'home.html',
        controller : "HomeController"
    })
    .when('/books',{
        templateUrl : 'books.html',
        controller : "HomeController"
    })
    .when('/authors',{
        templateUrl : 'authors.html',
        controller : "HomeController"
    })
    .when('/popular',{
        templateUrl : 'popular.html',
        controller : "HomeController"
    })
    .when('/contact',{
        templateUrl : 'contact.html',
        controller : "HomeController"
    })
    .otherwise({
        redirectTo: '/home'
    });
});

mainApp.controller('HomeController', function($scope) {
	//model
	$scope.message = "This is the HOME page"
});