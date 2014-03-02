'use strict';

angular.module('jarokeloApp')
  .controller('CitylistCtrl', function ($scope, $http, API_SERVER_ENDPOINT,
    $stateParams) {
          console.log('callme');
    $scope.cityId = $stateParams.cityId;
    $scope.page = parseInt($stateParams.pageId, 10);
    $scope.server = API_SERVER_ENDPOINT;
    $http.get(API_SERVER_ENDPOINT + '/api/list?mesto=' + $stateParams.cityId +
     '&page=' + $stateParams.pageId)
      .success(function (data) {
        $scope.data = data;
        $scope.totalPage = parseInt(data.pocet_stran, 10);
      });
  });