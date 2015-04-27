epiLancer.controller('TilesCtrl', function TilesCtrl($scope, TilesFactory) {
    $scope.tiles = TilesFactory.tiles;
    $scope.TilesFactory = TilesFactory;

    $scope.getRandomImage = function() {
        $scope.getRandomImage();
    }
});
