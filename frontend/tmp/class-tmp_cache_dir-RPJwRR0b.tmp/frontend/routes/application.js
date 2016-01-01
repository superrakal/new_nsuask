define('frontend/routes/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var ApplicationRoute;

  ApplicationRoute = Ember['default'].Route.extend({
    actions: {
      loading: function loading() {
        $('html').append('<div class="preloader-wrapper"><div class="preloader"><i class="fa fa-refresh fa-spin fa-5x"></i><h1>NSU.ask</h1><h4>@ev1lcap</h4></div></div>');
        return this.router.one('didTransition', function () {
          $('.preloader-wrapper').stop().fadeOut();
          return $('.preloader-wrapper').remove();
        });
      }
    }
  });

  exports['default'] = ApplicationRoute;

});