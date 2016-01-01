`import Ember from 'ember'`

RootRoute = Ember.Route.extend

  model: ->
    @store.findAll('message')

  setupController: (controller, model) ->
    controller.set 'model', model

`export default RootRoute`
