'use strict'
module = null
try
  module = angular.module 'ndx'
catch e
  module = angular.module 'ndx', []
module.run ($transitions) ->
  duration = 500
  doScroll = ->
    if $('html, body').scrollTop() > 0
      $('html, body').animate
        scrollTop: 0
      , duration
  $transitions.onFinish {}, doScroll