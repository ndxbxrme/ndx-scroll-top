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

  module.run(function($rootScope) {
    var doScroll, duration;
    duration = 500;
    doScroll = function() {
      console.log('i want to scroll');
      if ($('body').scrollTop() > 0) {
        return $('html, body').animate({
          scrollTop: 0
        }, duration);
      }
    };
    return $rootScope.$on('$stateChangeSuccess', doScroll);
  });

}).call(this);

//# sourceMappingURL=index.js.map
