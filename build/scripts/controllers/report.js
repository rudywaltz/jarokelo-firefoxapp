'use strict';

angular.module('jarokeloApp')
  .controller('ReportCtrl', function ($scope, $stateParams) {
  $scope.text = $stateParams;
  alert('CAllME');
});
