`import Ember from 'ember'`

LoveController = Ember.Controller.extend

  actions:
    delete: (message) ->
      message.destroyRecord()

`export default LoveController`
