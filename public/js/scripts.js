// creating the module
    var onTheFlyApp = angular.module('onTheFlyApp', ['ngRoute']);

    //configure our routes
    onTheFlyApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'MainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'AboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'ContactController'
            })
            .otherwise( { redirectTo: '/' });

    });

// creating the controller and injecting Angular's $scope
    onTheFlyApp.controller('MainController', function MainController($scope) {

		// creating a message to display in the test view
    	$scope.message = 'This is this and that is that.';
    });

    onTheFlyApp.controller('AboutController', function AboutController($scope) {
        $scope.message = "I'm all about ...";
    });

    onTheFlyApp.controller('ContactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });
