angular.module('F1FeederApp.tvcontroller', []).

  controller('tvController', function($scope, tmdbAPIservice, $routeParams) {

    //Variable list  
    $scope.nameFilter = null;
    $scope.id = $routeParams.id;
    $scope.popularShowList = [];
    $scope.topRatedList = [];
    $scope.thumbnailRoute = 'http://image.tmdb.org/t/p/';
    $scope.imSizeSm = 'w342';
    $scope.imSizeMe = 'w500';
    $scope.imSizeLg = 'w780';
    $scope.imSizeOr = 'original';
    $scope.showDetails = [];

    $scope.searchFilter = function (driver) {
        var re = new RegExp($scope.nameFilter, 'i');
        return !$scope.nameFilter || re.test(driver.Driver.givenName) || re.test(driver.Driver.familyName);
    };

    tmdbAPIservice.getPopularShows().success(function(data, status){
        if (status == 200) {
            $scope.popularShowList = data.results;
            console.log($scope.popularShowList)
            } else {
            console.error('Error happened while getting the popular show list.')
        }
    });

    tmdbAPIservice.getTopRatedShows().success(function (data, status) {
        if (status == 200) {
            $scope.topRatedList = data.results;
            console.log($scope.topRatedList)
        } else {
            console.error('Error happened while getting the top rated show list.')
        }
    });

    tmdbAPIservice.getShowDetails($scope.id).success(function (data, status) {
        if (status == 200) {
            $scope.showDetails = data;
            console.log($scope.showDetails)
        } else {
            console.error('Error happened while getting the show details.')
        }
    });

    }).
  /* Driver controller */
  controller('driverController', function($scope, $routeParams, ergastAPIservice) {
    $scope.id = $routeParams.id;
    $scope.races = [];
    $scope.driver = null;

    ergastAPIservice.getDriverDetails($scope.id).success(function (response) {
        $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]; 
    });

    ergastAPIservice.getDriverRaces($scope.id).success(function (response) {
        $scope.races = response.MRData.RaceTable.Races; 
    });
  });