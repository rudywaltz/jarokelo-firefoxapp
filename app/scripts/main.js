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
    })
    .state('list', {
      url: '/list',
      templateUrl: 'views/list.html',
    })
    .state('report', {
      url: '/report:id',
      templateUrl: 'views/report.html',
      controller: 'report',
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
      LIST_VIEW: 'List view'
    })
    .translations('hu', {
      HEADLINE: 'Járókelő.hu',
      LANG_SELECT_HU: 'magyar',
      LANG_SELECT_EN: 'angol',
      CHOOSE_ONE_OPTION: 'Válasszon egy lehetőséget',
      CITY: 'Város',
      REPORT: 'Bejelentés',
      LIST_VIEW: 'lista nézet'
    });
    $translateProvider.preferredLanguage('hu');
  }]);

var server = window.location.protocol + '//' + window.location.hostname;
if (window.location.port && window.location.port !== '9000') {
  server = server + ':' + window.location.port;
}
angular.module('configuration', []).constant('API_SERVER_ENDPOINT', server);