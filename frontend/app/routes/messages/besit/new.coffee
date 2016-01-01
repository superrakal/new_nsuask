`import Ember from 'ember'`

MessagesBesitNewRoute = Ember.Route.extend
  model: ->
    @store.createRecord('message')

  setupController: (controller, model) ->
    model.set 'category', 'besit'
    controller.set 'model', model

`export default MessagesBesitNewRoute`
