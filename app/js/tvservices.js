angular.module('F1FeederApp.tvservices', []).
  factory('tmdbAPIservice', function($http) {

    var tmdbAPI = {};
    var tmdbtv = 'http://api.themoviedb.org/3/tv/';
    var apiKey = 'api_key=9f7b5161574813237a0324812d13c799';
    var tmdbsearch = 'http://api.themoviedb.org/3/search/';


    tmdbAPI.getPopularShows = function() {
      return $http({
        method: 'JSONP', 
        url: tmdbtv + 'popular?' + apiKey
      });
    }

    tmdbAPI.getTopRatedShows = function() {
      return $http({
        method: 'JSONP', 
        url: tmdbtv + 'top_rated?' + apiKey
      });
    }
    //this has an optional paramater for timezone which
    //should be used
    tmdbAPI.getAiringToday = function() {
      return $http({
        method: 'JSONP', 
        url: tmdbtv + 'airing_today?' + apiKey
      });
    }

    tmdbAPI.getAiringToday = function() {
      return $http({
        method: 'JSONP', 
        url: tmdbtv + 'on_the_air?' + apiKey
      });
    }

    tmdbAPI.getSimilarShows = function(id) {
      return $http({
        method: 'JSONP', 
        url: tmdbtv + id + '/similar?' + apiKey
      });
    }

    tmdbAPI.getShowImages = function(id) {
      return $http({
        method: 'JSONP', 
        url: tmdbtv + id + '/images?' + apiKey
      });
    }

    tmdbAPI.GetShowsByTitle = function(input){
      return $http({
        method: 'JSONP',
        url: tmdbsearch + '/tv?query=' + input + '&' + apiKey
      })
    }

    return tmdbAPI;
  });