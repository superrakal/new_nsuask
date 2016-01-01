`import Ember from 'ember'`

MessagesOverhearNewRoute = Ember.Route.extend
  model: ->
    @store.createRecord('message')

  setupController: (controller, model) ->
    model.set 'category', 'overhear'
    controller.set 'model', model

`export default MessagesOverhearNewRoute`
