define('frontend/controllers/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var ApplicationController;

  ApplicationController = Ember['default'].Controller.extend({
    isHelperBlockVisible: false,
    actions: {
      toggleHelper: function toggleHelper() {
        return $('.helper-block').stop().animate({
          height: "toggle"
        });
      }
    }
  });

  exports['default'] = ApplicationController;

});