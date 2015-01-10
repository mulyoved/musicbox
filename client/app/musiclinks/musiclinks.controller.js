'use strict';

angular.module('musicboxApp')
  .controller('MusiclinksCtrl', function ($log) {
    var vm = this;

    vm.urls = [];

    vm.source = '';

    var processURL = function(url) {
      $log.log(url);
      vm.urls.push(url);
    };

    vm.processText = function() {
      $log.log('processText');
      vm.urls = [];

      var source = vm.source;
      URI.withinString(source, function (url) {
        processURL(url);
        return url;
      });

      source = '';
      angular.forEach(vm.urls, function (url) {
        if (source) {
          source += '\n';
        }
        source += url;
      });

      vm.source = source;
    };
  });
