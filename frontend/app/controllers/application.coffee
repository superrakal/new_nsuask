`import Ember from 'ember'`
`import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin'`

ApplicationController = Ember.Controller.extend LoginControllerMixin,
  authenticator: 'simple-auth-authenticator:devise'
  isHelperBlockVisible: false
  helperMessage: ''
  messageWasSend: false

  actions:
    toggleHelper: ->
      $('.helper-block').stop().animate({height: "toggle"})

    sendMessage: ->
      @set 'helperMessage', $.trim(@get 'helperMessage')
      if (@get 'helperMessage').length > 0
        message = @get 'helperMessage'
        Ember.$.ajax
          type: 'GET'
          url: "/send_message?message=#{message}"
          async: true
          success: =>
            @set 'helperMessage', ''
            @set 'messageWasSend', true
            Ember.run.later(@, (->
              @set 'messageWasSend', false
            ), 3000)

    authenticate: ->
      data = @getProperties('identification', 'password')
      @get('session').authenticate('simple-auth-authenticator:devise', data).then (=>
        $('#loginModal').modal('hide')
      )
    showLoginModal: ->
      $('#loginModal').modal('show')

`export default ApplicationController`
