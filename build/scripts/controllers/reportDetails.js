'use strict';

angular.module('jarokeloApp')
  .controller('ReportDetailsCtrl', function ($scope, $http,
    API_SERVER_ENDPOINT, $routeParams) {
		$scope.server = API_SERVER_ENDPOINT;
		$http.get(API_SERVER_ENDPOINT + '/api/podnet/?id=' + $routeParams.reportId)
		.success(function (data) {
			$scope.report = data;
    });
  });