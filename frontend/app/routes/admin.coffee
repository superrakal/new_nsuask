`import Ember from 'ember'`

AdminRoute = Ember.Route.extend
  beforeModel: ->
    @transitionTo 'sign_in'

`export default AdminRoute`
