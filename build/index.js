(function() {
  'use strict';
  var e, error, module;

  module = null;

  try {
    module = angular.module('ndx');
  } catch (error) {
    e = error;
    module = angular.module('ndx', []);
  }

  module.factory('scrollTop', function($rootScope) {
    var doScroll, duration;
    duration = 500;
    doScroll = $('body').scrollTop() > 0 ? $('html, body').animate({
      scrollTop: 0
    }, duration) : void 0;
    $rootScope.$on('$stateChangeSuccess', doScroll);
    return {
      go: doScroll
    };
  });

}).call(this);

//# sourceMappingURL=index.js.map
