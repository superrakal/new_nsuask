`import Ember from 'ember'`

MessageBoxComponent = Ember.Component.extend

  isAvailableToSend: (->
    if @get('message.text') && @get('message.category')
      !(@get('message.text').length > 0) && (@get('message.category').length > 0)
    else
      true
  ).property('message.text', 'message.category')

  isActiveOverhear: (->
    if @get('message.category')
      @get('message.category') == 'overhear'
    else
      false
  ).property('message.category')

  isActiveLove: (->
    if @get('message.category')
      @get('message.category') == 'love'
    else
      false
  ).property('message.category')

  isActiveBesit: (->
    if @get('message.category')
      @get('message.category') == 'besit'
    else
      false
  ).property('message.category')

  actions:
    openModal: ->
      @set 'isMessageSaved', false
      @set 'isSaving', false
      @$('.message_box_wrapper').fadeIn()
      @set 'message', @get('store').createRecord 'message'
    closeModal: ->
      @$('.message_box_wrapper').fadeOut()
    setCategory: (category) ->
      @set 'message.category', category
    saveMessage: ->
      @set 'isSaving', true
      @get('message').save().then =>
        @set 'isSaving', false
        @set 'isMessageSaved', true


`export default MessageBoxComponent`
