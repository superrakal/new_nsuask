define('frontend/routes/application', ['exports', 'ember', 'simple-auth/mixins/application-route-mixin'], function (exports, Ember, ApplicationRouteMixin) {

  'use strict';

  var ApplicationRoute;

  ApplicationRoute = Ember['default'].Route.extend(ApplicationRouteMixin['default'], {
    actions: {
      loading: function loading() {
        $('body').append('<div class="preloader_wrapper"><div class="page_preloader"><div id="preloader_1"><span></span><span></span><span></span><span></span><span></span></div></div></div>');
        return this.router.one('didTransition', function () {
          $('.preloader_wrapper').stop().fadeOut();
          return $('.preloader_wrapper').remove();
        });
      }
    }
  });

  exports['default'] = ApplicationRoute;

});