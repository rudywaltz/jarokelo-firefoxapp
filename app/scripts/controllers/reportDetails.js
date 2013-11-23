'use strict';

angular.module('jarokeloApp')
  .controller('ReportdetailsCtrl', function ($stateParams) {
	  expect($stateParams).toBe({reportId: 42});
  });
