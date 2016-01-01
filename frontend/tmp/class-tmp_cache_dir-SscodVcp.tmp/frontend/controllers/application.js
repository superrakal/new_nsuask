define('frontend/controllers/application', ['exports', 'ember', 'simple-auth/mixins/login-controller-mixin'], function (exports, Ember, LoginControllerMixin) {

  'use strict';

  var ApplicationController;

  ApplicationController = Ember['default'].Controller.extend(LoginControllerMixin['default'], {
    authenticator: 'simple-auth-authenticator:devise',
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
            url: "/send_message?message=" + message,
            async: true,
            success: (function (_this) {
              return function () {
                _this.set('helperMessage', '');
                _this.set('messageWasSend', true);
                return Ember['default'].run.later(_this, function () {
                  return this.set('messageWasSend', false);
                }, 3000);
              };
            })(this)
          });
        }
      },
      authenticate: function authenticate() {
        var data;
        data = this.getProperties('identification', 'password');
        return this.get('session').authenticate('simple-auth-authenticator:devise', data).then((function (_this) {
          return function () {
            return $('#loginModal').modal('hide');
          };
        })(this));
      },
      showLoginModal: function showLoginModal() {
        return $('#loginModal').modal('show');
      }
    }
  });

  exports['default'] = ApplicationController;

});