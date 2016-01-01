import ActiveModelAdapter from 'active-model-adapter';
import Ember from 'ember';

export default ActiveModelAdapter.extend({
  namespace: 'api/v1',

  ignoreMessage: function ignoreMessage(message) {
    Ember.$.ajax({
      async: true,
      data: { id: message.id },
      dataType: 'json',
      type: 'GET',
      url: this.buildURL(message.constructor.typeKey, message.id) + '/ignore'
    });
    return true;
  },

  pushMessage: function pushMessage(message) {
    Ember.$.ajax({
      async: true,
      data: { id: message.id },
      dataType: 'json',
      type: 'GET',
      url: this.buildURL(message.constructor.typeKey, message.id) + '/push'
    });
    return true;
  }

});