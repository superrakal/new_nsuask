`import Ember from 'ember'`
`import InfinityRoute from "ember-infinity/mixins/route"`

BesitRoute = Ember.Route.extend InfinityRoute,

  beforeModel: ->
    unless @session.isAuthenticated
      @transitionTo 'sign_in'

  model: ->
    @infinityModel("message", { perPage: 10, startingPage: 1, category: 'besit'})

  setupController: (controller, model) ->
    controller.set 'model', model

`export default BesitRoute`
