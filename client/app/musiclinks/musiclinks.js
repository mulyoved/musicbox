'use strict';

angular.module('musicboxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('musiclinks', {
        url: '/musiclinks',
        templateUrl: 'app/musiclinks/musiclinks.html',
        controller: 'MusiclinksCtrl',
        controllerAs: 'vm'
      });
  });
