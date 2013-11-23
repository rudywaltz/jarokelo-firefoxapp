'use strict';

angular.module('jarokeloApp')
  .controller('ReportDetailsCtrl', ['$scope', '$http', 'API_SERVER_ENDPOINT',
   function ($scope, $http, $server) {
		$scope.server = $server;
		$http.get($server + '/api/podnet/?id/2604')
		.success(function (data) {
			$scope = data;
    });
  }]);
