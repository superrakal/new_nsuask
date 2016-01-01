import Ember from 'ember';
var ApplicationController;

ApplicationController = Ember.Controller.extend({
  isHelperBlockVisible: false,
  helperMessage: '',
  messageWasSend: false,
  actions: {
    toggleHelper: function() {
      return $('.helper-block').stop().animate({
        height: "toggle"
      });
    },
    sendMessage: function() {
      var message;
      this.set('helperMessage', $.trim(this.get('helperMessage')));
      if ((this.get('helperMessage')).length > 0) {
        message = this.get('helperMessage');
        return Ember.$.ajax({
          type: 'GET',
          url: "/welcome/send_message?message=" + message,
          async: true,
          success: (function(_this) {
            return function() {
              _this.set('helperMessage', '');
              _this.set('messageWasSend', true);
              return Ember.run.later(_this, (function() {
                return this.set('messageWasSend', false);
              }), 1500);
            };
          })(this)
        });
      }
    }
  }
});

export default ApplicationController;
