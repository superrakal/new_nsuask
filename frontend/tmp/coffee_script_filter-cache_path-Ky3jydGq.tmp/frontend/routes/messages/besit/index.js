import Ember from 'ember';
var MessagesBesitIndexRoute;

MessagesBesitIndexRoute = Ember.Route.extend({
  beforeModel: function() {
    if (!this.session.isAuthenticated) {
      return this.transitionTo('root');
    }
  },
  model: function() {
    return this.store.findAll('message');
  },
  setupController: function(controller, model) {
    return controller.set('model', model.filterBy('category', 'besit').sortBy('state'));
  }
});

export default MessagesBesitIndexRoute;
