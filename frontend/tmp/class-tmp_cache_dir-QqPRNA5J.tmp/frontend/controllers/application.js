define('frontend/controllers/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var ApplicationController;

  ApplicationController = Ember['default'].Controller.extend({
    isHelperBlockVisible: false,
    helperMessage: '',
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
                return _this.set('helperMessage', '');
              };
            })(this)
          });
        }
      }
    }
  });

  exports['default'] = ApplicationController;

});