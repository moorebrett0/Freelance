var epiLancer = angular.module("epiLancer", ["ui.router"]);

epiLancer.directive("dragon", function() {
    return function(scope, element, attrs) {
        var classes = ["dragon", "butterfly", "spider", "duckling"];
        element.bind("mouseenter", function() {
            var previousClass = classes[0];
            var nextClass = classes.pop();
            classes.unshift(nextClass);
            element.removeClass(previousClass);
            element.addClass(nextClass);
       });
    }
});

epiLancer.config(function($stateProvider) {
        $stateProvider.state("home", {
        url: '',
        templateUrl: "partials/home.html",
        controller: "TilesCtrl"
    });
    });
