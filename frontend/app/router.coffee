`import Ember from 'ember'`
`import config from './config/environment'`

Router = Ember.Router.extend
  location: config.locationType

Router.map ()->
  @route 'root', path: '/'
  @resource 'messages', ->
    @resource 'messages.overhear', path: '/overhear', ->
      @route 'new'
    @resource 'messages.love', path: '/love', ->
      @route 'new'
    @resource 'messages.besit', path: '/besit', ->
      @route 'new'
    @route 'success'

`export default Router`
