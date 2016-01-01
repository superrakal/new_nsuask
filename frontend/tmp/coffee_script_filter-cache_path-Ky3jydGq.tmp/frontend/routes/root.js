import Ember from 'ember';
var RootRoute;

RootRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('message');
  },
  setupController: function(controller, model) {
    return controller.set('model', model);
  }
});

export default RootRoute;
