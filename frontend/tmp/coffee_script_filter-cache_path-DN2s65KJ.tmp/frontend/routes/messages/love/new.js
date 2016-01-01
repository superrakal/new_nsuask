import Ember from 'ember';
var MessagesLoveNewRoute;

MessagesLoveNewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('message');
  },
  setupController: function(controller, model) {
    model.set('category', 'love');
    return controller.set('model', model);
  }
});

export default MessagesLoveNewRoute;
