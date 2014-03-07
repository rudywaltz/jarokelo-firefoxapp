// awesome javascript goes here
'use strict';

var jarokelo = angular.module('jarokeloApp', ['ui.router',
 'pascalprecht.translate', 'configuration']);

jarokelo.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/main.html',
      // controller: 'MainCtrl'
    })
    .state('city', {
      url: '/city',
      templateUrl: 'views/city.html',
      controller: 'CityCtrl'
    })
    .state('list', {
      url: '/list',
      templateUrl: 'views/list.html',
      controller: 'ListCtrl'
    })
    .state('report', {
      url: '/report',
      templateUrl: 'views/report.html',
      controller: 'ReportCtrl'
    })
    .state('reportDetails', {
      url: '/report/:reportId',
      templateUrl: 'views/report.details.html',
      controller: 'ReportDetailsCtrl'
    });
});

jarokelo.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en', {
      HEADLINE: 'Jarokelo.hu',
      LANG_SELECT_HU:    'hungarian',
      LANG_SELECT_EN:    'english',
      CHOOSE_ONE_OPTION: 'Choose one option',
      CITY: 'City',
      REPORT: 'Report',
      LIST_VIEW: 'List view',
      PREVIOUS: 'previous',
      NEXT: 'next'

    })
    .translations('hu', {
      HEADLINE: 'Járókelő.hu',
      LANG_SELECT_HU: 'magyar',
      LANG_SELECT_EN: 'angol',
      CHOOSE_ONE_OPTION: 'Válasszon egy lehetőséget',
      CITY: 'Város',
      REPORT: 'Bejelentés',
      LIST_VIEW: 'Legfrisebb bejelentések',
      PREVIOUS: 'előző',
      NEXT: 'következő'
    });
    $translateProvider.preferredLanguage('hu');
  }]);

var server = window.location.protocol + '//' + window.location.hostname;
if (window.location.port && window.location.port !== '9000') {
  server = server + ':' + window.location.port;
}
angular.module('configuration', []).constant('API_SERVER_ENDPOINT', server);