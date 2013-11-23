'use strict';

angular.module('jarokeloApp')
  .controller('ReportCtrl', ['$scope', '$http', 'API_SERVER_ENDPOINT',
		function ($scope, $http, $server) {
			$scope.server = $server;
      $http.get($server + '/api/list')
      .success(function (data) {
        $scope.list = data.podnety;
      });
    }]);