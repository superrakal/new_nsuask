`import Ember from 'ember'`

OverhearController = Ember.Controller.extend

  actions:
    delete: (message) ->
      message.destroyRecord()

`export default OverhearController`
