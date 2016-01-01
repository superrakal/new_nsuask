`import Ember from 'ember'`

MessagesBesitNewController = Ember.Controller.extend

  actions:
    send: ->
      model = @get 'model'
      model.set 'text', $.trim(model.get 'text')
      if (model.get 'text').length > 0
        model.save().then =>
          @transitionTo 'messages.success'

`export default MessagesBesitNewController`
