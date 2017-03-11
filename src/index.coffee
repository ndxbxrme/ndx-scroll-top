'use strict'
module = null
try
  module = angular.module 'ndx'
catch e
  module = angular.module 'ndx-scroll-top', []
module.factory 'scrollTop', ($rootScope) ->
  duration = 500
  doScroll = 
    if $('body').scrollTop() > 0
      $('html, body').animate
        scrollTop: 0
      , duration
  $rootScope.$on '$stateChangeSuccess', doScroll
  go: doScroll