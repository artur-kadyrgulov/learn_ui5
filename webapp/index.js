sap.ui.define([
    "sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	XMLView.create({
		viewName: "sap.ui.demo.walkthrough.view.App" // it is name specified in index.hmtl at script in parameter "data-sap-ui-resourceroots"
	}).then(function (oView) {
		oView.placeAt("content");
	});

});