import Ember from 'ember';
var MessagesOverhearNewRoute;

MessagesOverhearNewRoute = Ember.Route.extend({
  model: function model() {
    return this.store.createRecord('message');
  },
  setupController: function setupController(controller, model) {
    model.set('category', 'overhear');
    return controller.set('model', model);
  }
});

export default MessagesOverhearNewRoute;