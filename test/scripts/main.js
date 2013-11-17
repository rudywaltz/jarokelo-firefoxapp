// awesome javascript goes here
'use strict';

var jarokelo = angular.module('jarokeloApp', ['ui.router',
 'pascalprecht.translate']);

jarokelo.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/main.html',
      // controller: 'MainCtrl'
    });
    // .state('user', {
    //   url: '/user',
    //   templateUrl: 'iews/user.html',
    //   // controller: 'UserCtrl'
    // });
});

jarokelo.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en', {
      HEADLINE: 'Jarokelo.hu',
      LANG_SELECT_HU:    'hungarian',
      LANG_SELECT_EN:    'english',
      CHOOSE_ONE_OPTION: 'Choose one option'
    })
    .translations('hu', {
      HEADLINE: 'Járókelő.hu',
      LANG_SELECT_HU: 'magyar',
      LANG_SELECT_EN: 'angol',
      CHOOSE_ONE_OPTION: 'Válasszon egy lehetőséget'
    });
    $translateProvider.preferredLanguage('hu');
  }]);