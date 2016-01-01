define('frontend/models/message', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var Message;

  Message = DS['default'].Model.extend({
    text: DS['default'].attr('string'),
    category: DS['default'].attr('string'),
    state: DS['default'].attr('string', {
      defaultValue: "new"
    }),
    created_at: DS['default'].attr('date'),
    formatted_created_at: (function () {
      var date, format;
      date = this.get('created_at');
      format = "DD.MM.YYYY";
      return moment(date).locale('ru').format(format);
    }).property('created_at'),
    "class": (function () {
      if (this.get('state') === 'new') {
        return 'success';
      } else {
        if (this.get('state') === 'ignored' || this.get('state') === 'deleted') {
          return 'active';
        } else {
          if (this.get('state') === 'published') {
            return 'info';
          }
        }
      }
    }).property('state'),
    isIgnored: (function () {
      return this.get('state') === 'ignored';
    }).property('state'),
    isVisibleActions: (function () {
      return this.get('state') === 'deleted' || this.get('state') === 'published';
    }).property('state')
  });

  exports['default'] = Message;

});