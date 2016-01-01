import Ember from 'ember';
var MessagesBesitIndexRoute;

MessagesBesitIndexRoute = Ember.Route.extend({
  beforeModel: function beforeModel() {
    if (!this.session.isAuthenticated) {
      return this.transitionTo('root');
    }
  },
  model: function model() {
    return this.store.findAll('message');
  },
  setupController: function setupController(controller, model) {
    return controller.set('model', model.filterBy('category', 'besit').sortBy('state'));
  }
});

export default MessagesBesitIndexRoute;