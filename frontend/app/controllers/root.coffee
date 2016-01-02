`import Ember from 'ember'`

RootController = Ember.Controller.extend

  new_overhear_count: 0
  new_love_count:     0
  new_besit_count:    0

  init: ->
    $.ajax
      type: 'GET'
      url: "/api/v1/messages/new_messages_count/"
      success: (data)=>
        @set 'new_overhear_count', data.overhear_messages_count
        @set 'new_love_count',     data.love_messages_count
        @set 'new_besit_count', data.besit_messages_count

  overhear_link: (->
    if @session.isAuthenticated
      'messages.overhear.index'
    else
      'messages.overhear.new'
  ).property('session.isAuthenticated')

  love_link: (->
    if @session.isAuthenticated
      'messages.love.index'
    else
      'messages.love.new'
  ).property('session.isAuthenticated')

  besit_link: (->
    if @session.isAuthenticated
      'messages.besit.index'
    else
      'messages.besit.new'
  ).property('session.isAuthenticated')

`export default RootController`
