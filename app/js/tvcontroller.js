angular.module('F1FeederApp.tvcontroller', []).

  /* Drivers controller */
  controller('tvController', function($scope, tmdbAPIservice) {
    $scope.nameFilter = null;
    $scope.popularShowList = [];
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