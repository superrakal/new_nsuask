define('frontend/initializers/simple-auth-devise', ['exports', 'simple-auth-devise/configuration', 'simple-auth-devise/authenticators/devise', 'simple-auth-devise/authorizers/devise', 'frontend/config/environment'], function (exports, Configuration, Authenticator, Authorizer, ENV) {

  'use strict';

  exports['default'] = {
    name: 'simple-auth-devise',
    before: 'simple-auth',
    initialize: function initialize(container, application) {
      Configuration['default'].load(container, ENV['default']['simple-auth-devise'] || {});
      container.register('simple-auth-authorizer:devise', Authorizer['default']);
      container.register('simple-auth-authenticator:devise', Authenticator['default']);
    }
  };

});