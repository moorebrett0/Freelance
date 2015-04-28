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
        views: {
            'header': {
                templateUrl: "partials/header.html",
                controller: "TilesCtrl"
            },
            'body': {
                templateUrl: "partials/home.html",
                controller: "TilesCtrl"
            },
            'footer': {
                templateUrl: "partials/footer.html",
                controller: "TilesCtrl"
            }
        }
    });
    });
