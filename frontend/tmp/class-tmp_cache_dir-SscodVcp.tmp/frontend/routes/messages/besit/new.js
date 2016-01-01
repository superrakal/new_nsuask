define('frontend/routes/messages/besit/new', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var MessagesBesitNewRoute;

  MessagesBesitNewRoute = Ember['default'].Route.extend({
    model: function model() {
      return this.store.createRecord('message');
    },
    setupController: function setupController(controller, model) {
      model.set('category', 'besit');
      return controller.set('model', model);
    }
  });

  exports['default'] = MessagesBesitNewRoute;

});