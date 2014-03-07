'use strict';

angular.module('jarokeloApp')
  .controller('CitylistCtrl', function ($scope, $http, API_SERVER_ENDPOINT,
    $stateProvider) {
    $scope.state = $stateProvider.cityId;
    console.log($stateProvider);

    // $scope.cityId = $routeParams.cityId;
    // $scope.page = parseInt($routeParams.pageId, 10);
    // $scope.server = API_SERVER_ENDPOINT;
    // $http.get(API_SERVER_ENDPOINT + '/api/list?mesto='
     // + $routeParams.cityId +
    //  '&page=' + $routeParams.pageId)
    //   .success(function (data) {
    //     $scope.data = data;
    //     $scope.totalPage = parseInt(data.pocet_stran, 10);
    //   });
  });