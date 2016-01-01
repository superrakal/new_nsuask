`import Ember from 'ember'`

MessagesBesitIndexRoute = Ember.Route.extend
  beforeModel: ->
    unless @session.isAuthenticated
      @transitionTo 'root'

  model: ->
    @store.findAll('message')

  setupController: (controller, model) ->
    controller.set 'model', model.filterBy('category', 'besit').sortBy('state')

`export default MessagesBesitIndexRoute`
