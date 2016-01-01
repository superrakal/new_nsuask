import Ember from 'ember';
var MessagesOverhearNewRoute;

MessagesOverhearNewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('message');
  },
  setupController: function(controller, model) {
    model.set('category', 'overhear');
    return controller.set('model', model);
  }
});

export default MessagesOverhearNewRoute;
