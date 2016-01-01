`import Ember from 'ember'`

ControllerMixinMixin = Ember.Mixin.create
  actions:
    ignore: (message) ->
      if @container.lookup("adapter:application").ignoreMessage(message)
        message.reload()

    push: (message) ->
      if @container.lookup("adapter:application").pushMessage(message)
        message.reload()

    delete: (message) ->
      message.set 'state', 'deleted'
      message.destroyRecord()

`export default ControllerMixinMixin`
