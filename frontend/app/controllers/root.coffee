`import Ember from 'ember'`

RootController = Ember.Controller.extend

  year: (->
    moment().format('YYYY')
  ).property()

`export default RootController`
