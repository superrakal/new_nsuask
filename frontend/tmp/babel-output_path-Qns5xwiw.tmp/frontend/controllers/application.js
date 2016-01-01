import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';
var ApplicationController;

ApplicationController = Ember.Controller.extend(LoginControllerMixin, {
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
        return Ember.$.ajax({
          type: 'GET',
          url: "/send_message?message=" + message,
          async: true,
          success: (function (_this) {
            return function () {
              _this.set('helperMessage', '');
              _this.set('messageWasSend', true);
              return Ember.run.later(_this, function () {
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

export default ApplicationController;