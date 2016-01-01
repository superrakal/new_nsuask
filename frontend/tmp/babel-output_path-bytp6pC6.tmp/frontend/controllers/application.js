import Ember from 'ember';
var ApplicationController;

ApplicationController = Ember.Controller.extend({
  isHelperBlockVisible: false,
  actions: {
    toggleHelper: function toggleHelper() {
      return $('.helper-block').stop().animate({
        height: "toggle"
      });
    }
  }
});

export default ApplicationController;