`import Ember from 'ember'`

BesitController = Ember.Controller.extend

  actions:
    delete: (message) ->
      message.destroyRecord()

`export default BesitController`
