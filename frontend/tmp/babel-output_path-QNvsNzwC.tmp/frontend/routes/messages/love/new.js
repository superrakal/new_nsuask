import Ember from 'ember';
var MessagesLoveNewRoute;

MessagesLoveNewRoute = Ember.Route.extend({
  model: function model() {
    return this.store.createRecord('message');
  },
  setupController: function setupController(controller, model) {
    model.set('category', 'love');
    return controller.set('model', model);
  }
});

export default MessagesLoveNewRoute;