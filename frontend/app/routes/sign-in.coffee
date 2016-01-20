`import Ember from 'ember'`

SignInRoute = Ember.Route.extend

  beforeModel: ->
    if @get('session.isAuthenticated')
      @transitionTo 'overhear'


`export default SignInRoute`
