`import Ember from 'ember'`

SignInRoute = Ember.Route.extend
  beforeModel: ->
    if @session.isAuthenticated
      @transitionTo 'overhear'


`export default SignInRoute`
