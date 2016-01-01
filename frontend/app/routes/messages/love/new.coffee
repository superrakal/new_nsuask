`import Ember from 'ember'`

MessagesLoveNewRoute = Ember.Route.extend
  model: ->
    @store.createRecord('message')

  setupController: (controller, model) ->
    model.set 'category', 'love'
    controller.set 'model', model

`export default MessagesLoveNewRoute`
