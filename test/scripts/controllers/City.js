'use strict';

angular.module('jarokeloApp')
  .controller('CityCtrl', ['$scope', '$http',
		function ($scope, $http) {
      $http.get('http://sandbox.odkazprestarostu.sk/api/mesta').success(function (data) {
        $scope.citys = data;
      });
    }]);