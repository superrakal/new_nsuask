define('frontend/mixins/controller-mixin', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var ControllerMixinMixin;

  ControllerMixinMixin = Ember['default'].Mixin.create({
    actions: {
      ignore: function ignore(message) {
        if (this.container.lookup("adapter:application").ignoreMessage(message)) {
          return message.reload();
        }
      },
      push: function push(message) {
        if (this.container.lookup("adapter:application").pushMessage(message)) {
          return message.reload();
        }
      },
      "delete": function _delete(message) {
        message.set('state', 'deleted');
        return message.destroyRecord();
      }
    }
  });

  exports['default'] = ControllerMixinMixin;

});