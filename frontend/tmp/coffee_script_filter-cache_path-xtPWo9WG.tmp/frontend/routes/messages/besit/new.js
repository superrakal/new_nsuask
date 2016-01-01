import Ember from 'ember';
var MessagesBesitNewRoute;

MessagesBesitNewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('message');
  },
  setupController: function(controller, model) {
    model.set('category', 'besit');
    return controller.set('model', model);
  }
});

export default MessagesBesitNewRoute;
