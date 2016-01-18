`import Ember from 'ember'`
`import InfinityRoute from "ember-infinity/mixins/route"`

OverhearRoute = Ember.Route.extend InfinityRoute,

  beforeModel: ->
    unless @session.isAuthenticated
      @transitionTo 'sign_in'

  model: ->
    @infinityModel("message", { perPage: 10, startingPage: 1, category: 'overhear'})

  setupController: (controller, model) ->
    controller.set 'model', model


`export default OverhearRoute`
