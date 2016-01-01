`import Ember from 'ember'`
`import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin'`

ApplicationRoute = Ember.Route.extend ApplicationRouteMixin,

  actions:
    loading: ->
      $('body').append('<div class="preloader_wrapper"><div class="page_preloader"><div id="preloader_1"><span></span><span></span><span></span><span></span><span></span></div></div></div>')
      @router.one 'didTransition', ->
        $('.preloader_wrapper').stop().fadeOut()
        $('.preloader_wrapper').remove()

`export default ApplicationRoute`
