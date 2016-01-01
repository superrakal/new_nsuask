define('frontend/routes/root', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var RootRoute;

  RootRoute = Ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('message');
    },
    setupController: function setupController(controller, model) {
      return controller.set('model', model);
    }
  });

  exports['default'] = RootRoute;

});