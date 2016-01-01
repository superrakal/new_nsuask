import Ember from 'ember';
import config from './config/environment';
var Router;

Router = Ember.Router.extend({
  location: config.locationType
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

export default Router;