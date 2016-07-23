angular.module('F1FeederApp.tvservices', []).
  factory('tmdbAPIservice', function($http) {

    var tmdbAPI = {};
    var tmdbtv = 'http://api.themoviedb.org/3/tv/';
    var apiKey = 'api_key=9f7b5161574813237a0324812d13c799';
    var tmdbsearch = 'http://api.themoviedb.org/3/search/';
    //image url: http://image.tmdb.org/t/p/w500/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg


    tmdbAPI.getPopularShows = function() {
      return $http({
        method: 'GET', 
        url: tmdbtv + 'popular?' + apiKey
      });
    }

    tmdbAPI.getTopRatedShows = function() {
      return $http({
        method: 'GET', 
        url: tmdbtv + 'top_rated?' + apiKey
      });
    }
    //this has an optional paramater for timezone which
    //should be used
    tmdbAPI.getAiringToday = function() {
      return $http({
        method: 'GET', 
        url: tmdbtv + 'airing_today?' + apiKey
      });
    }

    tmdbAPI.getAiringToday = function() {
      return $http({
        method: 'GET', 
        url: tmdbtv + 'on_the_air?' + apiKey
      });
    }

    tmdbAPI.getSimilarShows = function(id) {
      return $http({
        method: 'GET', 
        url: tmdbtv + id + '/similar?' + apiKey
      });
    }

    tmdbAPI.getShowImages = function(id) {
      return $http({
        method: 'GET', 
        url: tmdbtv + id + '/images?' + apiKey
      });
    }

    tmdbAPI.getShowsByTitle = function(input){
      return $http({
        method: 'GET',
        url: tmdbsearch + '/tv?query=' + input + '&' + apiKey
      });
    }

    tmdbAPI.getShowDetails = function (id) {
      return $http({
        method: 'GET',
        url: tmdbtv + id + '?' + apiKey
      });
    }

    return tmdbAPI;
  });