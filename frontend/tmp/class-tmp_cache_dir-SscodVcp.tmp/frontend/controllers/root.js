define('frontend/controllers/root', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var RootController;

  RootController = Ember['default'].Controller.extend({
    new_overhear_count: (function () {
      return this.get('model').filterBy('category', 'overhear').filterBy('state', 'new').length;
    }).property('model.length'),
    new_love_count: (function () {
      return this.get('model').filterBy('category', 'love').filterBy('state', 'new').length;
    }).property('model.length'),
    new_besit_count: (function () {
      return this.get('model').filterBy('category', 'besit').filterBy('state', 'new').length;
    }).property('model.length'),
    overhear_link: (function () {
      if (this.session.isAuthenticated) {
        return 'messages.overhear.index';
      } else {
        return 'messages.overhear.new';
      }
    }).property('session.isAuthenticated'),
    love_link: (function () {
      if (this.session.isAuthenticated) {
        return 'messages.love.index';
      } else {
        return 'messages.love.new';
      }
    }).property('session.isAuthenticated'),
    besit_link: (function () {
      if (this.session.isAuthenticated) {
        return 'messages.besit.index';
      } else {
        return 'messages.besit.new';
      }
    }).property('session.isAuthenticated')
  });

  exports['default'] = RootController;

});