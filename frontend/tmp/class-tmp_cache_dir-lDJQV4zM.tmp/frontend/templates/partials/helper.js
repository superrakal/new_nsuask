define('frontend/templates/partials/helper', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 517
          }
        },
        "moduleName": "frontend/templates/partials/helper.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","helper-block");
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","bubble");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","close-button");
        var el4 = dom.createElement("i");
        dom.setAttribute(el4,"class","fa fa-times");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","container-fluid");
        var el4 = dom.createElement("h4");
        var el5 = dom.createTextNode("Оставьте сообщение разработчику");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("textarea");
        dom.setAttribute(el4,"placeholder","Введите сообщение");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","actions");
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"class","btn btn-block btn-mint");
        var el6 = dom.createTextNode("Отправить");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","helper");
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"data-hint","Связь с разработчиком");
        dom.setAttribute(el2,"class","helper-wrapper hint hint--left");
        var el3 = dom.createElement("i");
        dom.setAttribute(el3,"class","fa fa-user");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 0, 0]);
        var element1 = dom.childAt(fragment, [1]);
        var morphs = new Array(2);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createElementMorph(element1);
        return morphs;
      },
      statements: [
        ["element","action",["toggleHelper"],[],["loc",[null,[1,51],[1,76]]]],
        ["element","action",["toggleHelper"],[],["loc",[null,[1,360],[1,385]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});