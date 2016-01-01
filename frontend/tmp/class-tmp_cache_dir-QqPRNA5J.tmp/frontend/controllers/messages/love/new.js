define('frontend/controllers/messages/love/new', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var MessagesLoveNewController;

  MessagesLoveNewController = Ember['default'].Controller.extend({
    actions: {
      send: function send() {
        var model;
        model = this.get('model');
        model.set('text', $.trim(model.get('text')));
        if (model.get('text').length > 0) {
          return model.save().then((function (_this) {
            return function () {
              return _this.transitionTo('messages.success');
            };
          })(this));
        }
      }
    }
  });

  exports['default'] = MessagesLoveNewController;

});