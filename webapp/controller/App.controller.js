sap.ui.define([
    "sap/ui/core/mvc/Controller"
 ], function (Controller) {
    "use strict";

    // Controller names are capitalized, for example App.controller.js
    // Controllers carry the same name as the related view (if there is a 1:1 relationship), for example in App.view.xml ~ App.controller.js
    // Event handlers are prefixed with on, for example onShowHello that specified in App.view.xml and define logic in App.controller.js
    // Controller names always end with *.controller.js, for example App.controller.js

    // sap.ui.demo.walkthrough specified in webapp/index.html
    // controller is the folder in webapp
    // App it is name of file with controller logic
    // sap.ui.demo.walkthrough.controller.App specified in App.view.xml like controller for some logic

    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
       onShowHello : function () {
          // show a native JavaScript alert
          alert("Hello World");
       }
    });
 });