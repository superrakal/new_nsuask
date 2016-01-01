define('frontend/templates/partials/login-form', ['exports'], function (exports) {

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
            "column": 863
          }
        },
        "moduleName": "frontend/templates/partials/login-form.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"id","loginModal");
        dom.setAttribute(el1,"role","dialog");
        dom.setAttribute(el1,"tabindex","-1");
        dom.setAttribute(el1,"class","modal fade in");
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"role","document");
        dom.setAttribute(el2,"class","modal-dialog");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","modal-content");
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","modal-header");
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"aria-label","Закрыть");
        dom.setAttribute(el5,"data-dismiss","modal");
        dom.setAttribute(el5,"type","button");
        dom.setAttribute(el5,"class","close");
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"aria-hidden","true");
        var el7 = dom.createTextNode(" ×");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h4");
        dom.setAttribute(el5,"class","modal-title");
        var el6 = dom.createTextNode("Авторизация");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","modal-body");
        var el5 = dom.createElement("form");
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","form-group");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","form-group");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","modal-footer");
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"data-dismiss","modal");
        dom.setAttribute(el5,"type","button");
        dom.setAttribute(el5,"class","btn btn-default login-button");
        var el6 = dom.createTextNode(" Закрыть окно");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"type","button");
        dom.setAttribute(el5,"class","btn btn-primary login-button");
        var el6 = dom.createTextNode(" Войти");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 0, 0]);
        var element1 = dom.childAt(element0, [1, 0]);
        var element2 = dom.childAt(element0, [2, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [0]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [1]),0,0);
        morphs[2] = dom.createElementMorph(element2);
        return morphs;
      },
      statements: [
        ["inline","input",[],["class","form-control","value",["subexpr","@mut",[["get","controller.identification",["loc",[null,[1,422],[1,447]]]]],[],[]],"placeholder","Email"],["loc",[null,[1,387],[1,469]]]],
        ["inline","input",[],["class","form-control","value",["subexpr","@mut",[["get","controller.password",["loc",[null,[1,534],[1,553]]]]],[],[]],"type","password","placeholder","Пароль"],["loc",[null,[1,499],[1,592]]]],
        ["element","action",["authenticate"],[],["loc",[null,[1,747],[1,772]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});