`import Ember from 'ember'`
`import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin'`

SignInController = Ember.Controller.extend LoginControllerMixin,

  actions:
    authenticate: ->
      data = @getProperties('identification', 'password')
      @get('session').authenticate('simple-auth-authenticator:devise', data)

`export default SignInController`
