`import Ember from 'ember'`

OverhearController = Ember.Controller.extend

  actions:
    delete: (message) ->
      message.destroyRecord().then =>
        @transitionToRoute 'overhear'

`export default OverhearController`
