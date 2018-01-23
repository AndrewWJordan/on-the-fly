// creating the module
    var onTheFlyApp = angular.module('onTheFlyApp', ['ngRoute']);

    //configure our routes
    onTheFlyApp.config(function($routeProvider) {
        $routeProvider

            // route for the intro page
            .when('/', {
                templateUrl : 'pages/intro.html',
                controller  : 'MainController'
            })

            // route for the skills page
            .when('/skills', {
                templateUrl : 'pages/skills.html',
                controller  : 'SkillsController'
            })

            // route for the history page
            .when('/history', {
                templateUrl : 'pages/history.html',
                controller  : 'HistoryController'
            })

            // route for the history page
            .when('/education', {
                templateUrl : 'pages/education.html',
                controller  : 'EducationController'
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
    	//$scope.message = "I like to think of myself as a full stack developer.";
    });

    onTheFlyApp.controller('SkillsController', function SkillsController($scope) {
        $scope.skills = [
	        {
	        	name: "Javascript",
	        	skilllevel: 6.5,
	        	details: ["vanilla", "jQuery", "Node/Express js", "AJAX"],
	        },
	        {
	        	name: "CSS",
	        	skilllevel: 7.5,
	        	details: ["Bootstrap", "Skeleton", "Grid"],
	        },
	        {
	        	name: "PHP",
	        	skilllevel: 5,
	        },
	        {
	        	name: "Linux",
	        	skilllevel: 7,
	        	details: ["RedHat", "Open SUSE", "Ubuntu"],
	        },
	     
	    ]
    });

    onTheFlyApp.controller('HistoryController', function($scope) {
        $scope.jobs = [
	        {
	        	employer: "Marist College",
	        	length: "October 2015 - Present",
	        	position: "Software Engineer",
	        },
	        {
	        	employer: "Hudson Valley Credit Union",
	        	length: "2014-2015",
	        	position: "Computer Operator",
	        },
	        {
	        	employer: "Hudson Valley Credit Union",
	        	length: "2012-2013",
	        	position: "Computer Operator",
	        },
	    ]
    });

    onTheFlyApp.controller('EducationController', function($scope) {
        $scope.colleges = [
	        {
	        	name: "SUNY Empire",
	        	degree: "A.S. Information Systems",
	        },
	        {
	        	name: "SUNY Empire",
	        	degree: "B.S. Information Technology - 2019",
	        },
	    ]
    });

    onTheFlyApp.controller('ContactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });
