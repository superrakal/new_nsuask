`import Ember from 'ember'`

BesitController = Ember.Controller.extend

  actions:
    delete: (message) ->
      message.destroyRecord().then =>
        @transitionToRoute 'besit'

`export default BesitController`
