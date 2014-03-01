// awesome javascript goes here
'use strict';

var jarokelo = angular.module('jarokeloApp', ['ngRoute',
 'pascalprecht.translate', 'configuration']);

jarokelo.config(function ($locationProvider, $routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'views/main.html',
      // controller: 'MainCtrl'
    })
    .when('/city', {
      templateUrl: 'views/city.html',
      controller: 'CityCtrl'
    })
    .when('/city/:cityId', {
      templateUrl: 'views/citylist.html',
      controller: 'CitylistCtrl'
    })
    .when('/list', {
      templateUrl: 'views/list.html',
      controller: 'ListCtrl'
    })
    .when('/report', {
      templateUrl: 'views/report.html',
      controller: 'ReportCtrl'
    })
    .when('//report/:reportId', {
      templateUrl: 'views/report.details.html',
      controller: 'ReportDetailsCtrl'
    })
    .otherwise({
        redirectTo: '/'
      });
  $locationProvider.html5Mode(false);
});

jarokelo.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en', {
      HEADLINE: 'Jarokelo.hu',
      LANG_SELECT_HU:    'hungarian',
      LANG_SELECT_EN:    'english',
      CHOOSE_ONE_OPTION: 'Choose one option',
      CITY: 'City',
      REPORT: 'Report',
      LIST_VIEW: 'List view'
    })
    .translations('hu', {
      HEADLINE: 'Járókelő.hu',
      LANG_SELECT_HU: 'magyar',
      LANG_SELECT_EN: 'angol',
      CHOOSE_ONE_OPTION: 'Válasszon egy lehetőséget',
      CITY: 'Város',
      REPORT: 'Bejelentés',
      LIST_VIEW: 'Legfrisebb bejelentések'
    });
    $translateProvider.preferredLanguage('hu');
  }]);

var server = window.location.protocol + '//' + window.location.hostname;
if (window.location.port && window.location.port !== '9000') {
  server = server + ':' + window.location.port;
}
angular.module('configuration', []).constant('API_SERVER_ENDPOINT', server);