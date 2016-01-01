define('frontend/controllers/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var ApplicationController;

  ApplicationController = Ember['default'].Controller.extend({
    isHelperBlockVisible: false,
    helperMessage: '',
    messageWasSend: false,
    actions: {
      toggleHelper: function toggleHelper() {
        return $('.helper-block').stop().animate({
          height: "toggle"
        });
      },
      sendMessage: function sendMessage() {
        var message;
        this.set('helperMessage', $.trim(this.get('helperMessage')));
        if (this.get('helperMessage').length > 0) {
          message = this.get('helperMessage');
          return Ember['default'].$.ajax({
            type: 'GET',
            url: "/welcome/send_message?message=" + message,
            async: true,
            success: (function (_this) {
              return function () {
                _this.set('helperMessage', '');
                _this.set('messageWasSend', true);
                return Ember['default'].run.later(_this, function () {
                  return this.set('messageWasSend', false);
                }, 1500);
              };
            })(this)
          });
        }
      }
    }
  });

  exports['default'] = ApplicationController;

});