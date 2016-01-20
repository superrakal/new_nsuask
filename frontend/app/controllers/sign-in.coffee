`import Ember from 'ember'`

SignInController = Ember.Controller.extend

  actions:
    authenticate: ->
      data = @getProperties('identification', 'password')
      @get('session').authenticate('authenticator:devise', data.identification, data.password)

`export default SignInController`
