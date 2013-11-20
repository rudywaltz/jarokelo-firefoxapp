'use strict';

angular.module('jarokeloApp')
  .controller('ListCtrl', ['$scope', '$http',
		function ($scope, $http) {
      $http.get('http://sandbox.odkazprestarostu.sk/api/list')
      .success(function (data) {
        $scope.list = data.podnety;
      });
    }]);