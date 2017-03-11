(function() {
  'use strict';
  var e, error, module;

  module = null;

  try {
    module = angular.module('ndx');
  } catch (error) {
    e = error;
    module = angular.module('ndx-scroll-top', []);
  }

  module.factory('scrollTop', function($rootScope) {
    var duration;
    duration = 500;
    return $rootScope.$on('$stateChangeSuccess', function(e, curr) {
      if ($('body').scrollTop() > 0) {
        return $('html, body').animate({
          scrollTop: 0
        }, duration);
      }
    });
  });

}).call(this);

//# sourceMappingURL=index.js.map
