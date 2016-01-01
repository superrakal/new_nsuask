define('frontend/models/message', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var Message;

  Message = DS['default'].Model.extend({
    text: DS['default'].attr('string'),
    category: DS['default'].attr('string'),
    state: DS['default'].attr('string', {
      defaultValue: "new"
    })
  });

  exports['default'] = Message;

});