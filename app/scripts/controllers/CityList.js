'use strict';

angular.module('jarokeloApp')
  .controller('CitylistCtrl', function ($scope, $http, API_SERVER_ENDPOINT,
    $routeParams) {
		$scope.route = $routeParams.cityId;
		$scope.server = API_SERVER_ENDPOINT;
    $http.get(API_SERVER_ENDPOINT + '/api/list?mesto=' + $routeParams.cityId)
      .success(function (data) {
        $scope.list = data.podnety;
      });
  });