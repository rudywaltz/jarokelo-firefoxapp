'use strict';

angular.module('jarokeloApp')
  .controller('CityCtrl', ['$scope', '$http', 'API_SERVER_ENDPOINT',
		function ($scope, $http, $server) {
      $http.get($server + '/api/mesta')
      .success(function (data) {
        $scope.citys = data;
      });
    }]);