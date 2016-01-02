`import Ember from 'ember'`
`import InfinityRoute from "ember-infinity/mixins/route"`

MessagesOverhearIndexRoute = Ember.Route.extend InfinityRoute,
  beforeModel: ->
    unless @session.isAuthenticated
      @transitionTo 'root'

  model: ->
    @infinityModel('message', {category: "overhear", perPage: 5, startingPage: 1})

  setupController: (controller, model) ->
    controller.set 'model', model

`export default MessagesOverhearIndexRoute`
