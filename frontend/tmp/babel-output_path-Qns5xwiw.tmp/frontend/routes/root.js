import Ember from 'ember';
var RootRoute;

RootRoute = Ember.Route.extend({
  model: function model() {
    return this.store.findAll('message');
  },
  setupController: function setupController(controller, model) {
    return controller.set('model', model);
  }
});

export default RootRoute;