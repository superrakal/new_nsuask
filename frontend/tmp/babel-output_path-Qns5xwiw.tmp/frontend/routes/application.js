import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
var ApplicationRoute;

ApplicationRoute = Ember.Route.extend(ApplicationRouteMixin, {
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

export default ApplicationRoute;