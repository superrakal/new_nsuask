`import Ember from 'ember'`
`import InfinityRoute from "ember-infinity/mixins/route"`

MessagesLoveIndexRoute = Ember.Route.extend InfinityRoute,
  beforeModel: ->
    unless @session.isAuthenticated
      @transitionTo 'root'

  model: ->
    @infinityModel('message', {category: 'love', perPage: 5, startingPage: 1})

  setupController: (controller, model) ->
    controller.set 'model', model

`export default MessagesLoveIndexRoute`
