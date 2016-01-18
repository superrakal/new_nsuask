`import Ember from 'ember'`
`import config from './config/environment'`

Router = Ember.Router.extend
  location: config.locationType

Router.map ()->
  @route 'root', path: '/'
  @route 'overhear'
  @route 'love'
  @route 'besit'
  @route 'sign_in'

`export default Router`
