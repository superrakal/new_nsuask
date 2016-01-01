define('frontend/router', ['exports', 'ember', 'frontend/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router;

  Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('root', {
      path: '/'
    });
    return this.resource('messages', function () {
      this.resource('messages.overhear', {
        path: '/overhear'
      }, function () {
        return this.route('new');
      });
      this.resource('messages.love', {
        path: '/love'
      }, function () {
        return this.route('new');
      });
      this.resource('messages.besit', {
        path: '/besit'
      }, function () {
        return this.route('new');
      });
      return this.route('success');
    });
  });

  exports['default'] = Router;

});