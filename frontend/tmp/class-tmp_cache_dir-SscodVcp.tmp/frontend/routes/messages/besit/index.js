define('frontend/routes/messages/besit/index', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var MessagesBesitIndexRoute;

  MessagesBesitIndexRoute = Ember['default'].Route.extend({
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

  exports['default'] = MessagesBesitIndexRoute;

});