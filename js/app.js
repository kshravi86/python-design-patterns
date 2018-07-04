'use strict';

function jsonp_callback(data) {
    // returning from async callbacks is (generally) meaningless
    console.log(data.found);
}


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives','ajoslin.mobile-navigate','ngMobile'])
    .config(function ($compileProvider){
        $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    })
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/homeView.html', controller: 'HomeCtrl'});
        $routeProvider.when('/view1', {templateUrl: 'partials/iterator.html'});
        $routeProvider.when('/view2', {templateUrl: 'partials/strategy.html'});
        $routeProvider.when('/view3', {templateUrl: 'partials/observer.html'});
        $routeProvider.when('/view4', {templateUrl: 'partials/abstract_factory.html'});
        $routeProvider.when('/view5', {templateUrl: 'partials/factory_method.html'});
        $routeProvider.when('/view6', {templateUrl: 'partials/lazy_evaluation.html'});
        $routeProvider.when('/view7', {templateUrl: 'partials/builder.html'});
        $routeProvider.when('/view8', {templateUrl: 'partials/chain.html'});
		$routeProvider.when('/view9',{templateUrl:'partials/borg.html'});
       $routeProvider.when('/view10',{templateUrl:'partials/prototype.html'});
	   $routeProvider.when("/view11",{templateUrl:'partials/pool.html'});
	   $routeProvider.when("/view12",{templateUrl:'partials/constructor_injection.html'});
	   $routeProvider.when("/view13",{templateUrl:'partials/parameter_injection.html'});
	   $routeProvider.when("/view14",{templateUrl:'partials/setter_injection.html'});
	   $routeProvider.when("/view15",{templateUrl:'partials/decorator.html'});
	   $routeProvider.when("/view16",{templateUrl:'partials/mvc.html'});
	   $routeProvider.when("/view17",{templateUrl:'partials/proxy.html'});
	   $routeProvider.when("/view18",{templateUrl:'partials/adapter.html'});
	   $routeProvider.when("/view19",{templateUrl:'partials/composite.html'});
	  $routeProvider.when("/view20",{templateUrl:'partials/facade.html'});
	  $routeProvider.when("/view21",{templateUrl:'partials/bridge.html'});
	  $routeProvider.when("/view22",{templateUrl:'partials/flyweight.html'});
	  $routeProvider.when("/view23",{templateUrl:'partials/front_controller.html'});
		$routeProvider.when("/view24",{templateUrl:'partials/mediator.html'});
	 $routeProvider.when("/view25",{templateUrl:'partials/registry.html'});
		$routeProvider.when("/view26",{templateUrl:'partials/publish_subscribe.html'});
		$routeProvider.when("/view27",{templateUrl:'partials/state.html'});
		$routeProvider.when("/view28",{templateUrl:'partials/memento.html'});
		$routeProvider.when("/view29",{templateUrl:'partials/command.html'});
		$routeProvider.when("/view30",{templateUrl:'partials/template.html'});
		$routeProvider.when("/view33",{templateUrl:'partials/specification.html'});
		$routeProvider.when("/view34",{templateUrl:'partials/delegation_pattern.html'});
		$routeProvider.when("/view35",{templateUrl:'partials/catalog.html'});
		$routeProvider.when("/view36",{templateUrl:'partials/chaining_method.html'});
	    $routeProvider.when("/view37",{templateUrl:'partials/visitor.html'});
		$routeProvider.when("/view38",{templateUrl:'partials/3-tier.html'});
		$routeProvider.when("/view39",{templateUrl:'partials/cheway.html'});
		$routeProvider.when("/view40",{templateUrl:'partials/Nseries.html'});
		$routeProvider.otherwise({redirectTo: '/'});
  }]);
  
  
  
myApp.directive('ngPrism', [function() {
    return {
        restrict: 'A',
        link: function($scope, element, attrs) {
            element.ready(function() {
                Prism.highlightElement(element[0]);
            });
        }
    }
}]);

