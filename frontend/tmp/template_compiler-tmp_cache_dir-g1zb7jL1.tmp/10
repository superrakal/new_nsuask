export default Ember.HTMLBars.template((function() {
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
          "column": 564
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
      var el4 = dom.createComment("");
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
      var element0 = dom.childAt(fragment, [0, 0]);
      var element1 = dom.childAt(element0, [0]);
      var element2 = dom.childAt(element0, [1]);
      var element3 = dom.childAt(element2, [2, 0]);
      var element4 = dom.childAt(fragment, [1]);
      var morphs = new Array(4);
      morphs[0] = dom.createElementMorph(element1);
      morphs[1] = dom.createMorphAt(element2,1,1);
      morphs[2] = dom.createElementMorph(element3);
      morphs[3] = dom.createElementMorph(element4);
      return morphs;
    },
    statements: [
      ["element","action",["toggleHelper"],[],["loc",[null,[1,51],[1,76]]]],
      ["inline","textarea",[],["placeholder","Введите сообщение","value",["subexpr","@mut",[["get","controller.helperMessage",["loc",[null,[1,249],[1,273]]]]],[],[]]],["loc",[null,[1,200],[1,275]]]],
      ["element","action",["sendMessage"],[],["loc",[null,[1,304],[1,328]]]],
      ["element","action",["toggleHelper"],[],["loc",[null,[1,407],[1,432]]]]
    ],
    locals: [],
    templates: []
  };
}()));