import Ember from 'ember';
var ControllerMixinMixin;

ControllerMixinMixin = Ember.Mixin.create({
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

export default ControllerMixinMixin;