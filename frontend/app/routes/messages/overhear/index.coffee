`import Ember from 'ember'`

MessagesOverhearIndexRoute = Ember.Route.extend
  beforeModel: ->
    unless @session.isAuthenticated
      @transitionTo 'root'

  model: ->
    @store.findAll('message')

  setupController: (controller, model) ->
    controller.set 'model', model.filterBy('category', 'overhear').sortBy('state')

`export default MessagesOverhearIndexRoute`
