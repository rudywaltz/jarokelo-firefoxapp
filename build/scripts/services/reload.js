'use strict';

angular.module('jarokeloApp')
  .factory('reload', function ($route) {
    // Service logic
    // ...
  $route.reload();
  alert('Angular');

  // Public API here
  return {
    pageReload: function () {
      alert('Angular');
      console.log('reload');
      return 'succsess';
    }
  };
});