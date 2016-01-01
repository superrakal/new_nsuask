define('frontend/routes/messages/overhear/new', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var MessagesOverhearNewRoute;

  MessagesOverhearNewRoute = Ember['default'].Route.extend({
    model: function model() {
      return this.store.createRecord('message');
    },
    setupController: function setupController(controller, model) {
      model.set('category', 'overhear');
      return controller.set('model', model);
    }
  });

  exports['default'] = MessagesOverhearNewRoute;

});