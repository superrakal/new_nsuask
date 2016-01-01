define('frontend/routes/messages/love/new', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var MessagesLoveNewRoute;

  MessagesLoveNewRoute = Ember['default'].Route.extend({
    model: function model() {
      return this.store.createRecord('message');
    },
    setupController: function setupController(controller, model) {
      model.set('category', 'love');
      return controller.set('model', model);
    }
  });

  exports['default'] = MessagesLoveNewRoute;

});