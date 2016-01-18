`import Ember from 'ember'`

LoveController = Ember.Controller.extend

  actions:
    delete: (message) ->
      message.destroyRecord().then =>
        @transitionToRoute 'love'

`export default LoveController`
