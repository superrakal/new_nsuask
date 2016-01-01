`import Ember from 'ember'`

RootController = Ember.Controller.extend

  new_overhear_count: (->
    @get('model').filterBy('category', 'overhear').filterBy('state', 'new').length
  ).property('model.length')

  new_love_count: (->
    @get('model').filterBy('category', 'love').filterBy('state', 'new').length
  ).property('model.length')

  new_besit_count: (->
    @get('model').filterBy('category', 'besit').filterBy('state', 'new').length
  ).property('model.length')

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
