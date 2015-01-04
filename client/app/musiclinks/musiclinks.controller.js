'use strict';

angular.module('musicboxApp')
  .controller('MusiclinksCtrl', function ($log) {
    var vm = this;

    vm.urls = [];

    vm.source = "Hello www.example.com,\n"
    + "http://google.com is a search engine, like http://www.bing.com\n"
    + "http://exämple.org/foo.html?baz=la#bumm is an IDN URL,\n"
    + "http://123.123.123.123/foo.html is IPv4 and "
    + "http://fe80:0000:0000:0000:0204:61ff:fe9d:f156/foobar.html is IPv6.\n"
    + "links can also be in parens (http://example.org) "
    + "or quotes »http://example.org«.";

    var processURL = function(url) {
      $log.log(url);
      vm.urls.push(url);
    };

    vm.processText = function() {
      $log.log('processText');
      vm.urls = [];

      var source = vm.source;
      var result = URI.withinString(source, function (url) {
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
