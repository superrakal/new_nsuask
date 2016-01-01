define('frontend/adapters/application', ['exports', 'active-model-adapter', 'ember'], function (exports, ActiveModelAdapter, Ember) {

  'use strict';

  exports['default'] = ActiveModelAdapter['default'].extend({
    namespace: 'api/v1',

    ignoreMessage: function ignoreMessage(message) {
      Ember['default'].$.ajax({
        async: true,
        data: { id: message.id },
        dataType: 'json',
        type: 'GET',
        url: this.buildURL(message.constructor.typeKey, message.id) + '/ignore'
      });
      return true;
    },

    pushMessage: function pushMessage(message) {
      Ember['default'].$.ajax({
        async: true,
        data: { id: message.id },
        dataType: 'json',
        type: 'GET',
        url: this.buildURL(message.constructor.typeKey, message.id) + '/push'
      });
      return true;
    }

  });

});