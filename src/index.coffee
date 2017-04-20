'use strict'
module = null
try
  module = angular.module 'ndx'
catch e
  module = angular.module 'ndx', []
module.run ($rootScope) ->
  duration = 500
  doScroll = ->
    if $('body').scrollTop() > 0
      $('html, body').animate
        scrollTop: 0
      , duration
  $rootScope.$on '$stateChangeSuccess', doScroll