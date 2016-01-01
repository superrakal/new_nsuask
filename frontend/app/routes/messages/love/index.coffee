`import Ember from 'ember'`

MessagesLoveIndexRoute = Ember.Route.extend
  beforeModel: ->
    unless @session.isAuthenticated
      @transitionTo 'root'

  model: ->
    @store.findAll('message')

  setupController: (controller, model) ->
    controller.set 'model', model.filterBy('category', 'love').sortBy('state')

`export default MessagesLoveIndexRoute`
