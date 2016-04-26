sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.training.controller.Main", {

		_getDialog: function() {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("idFrag",
							      "sap.training.view.Dialog", this);
				this.getView().addDependent(this._oDialog);
			}
			return this._oDialog;
		},

		onOpenDialog: function() {
			this._getDialog().open();
		},

		onCloseDialog: function() {
			this._getDialog().close();

			var oInput = sap.ui.core.Fragment.byId("idFrag", "idInput");
			var oText = this.getView().byId("idText");

			oText.setText("Hallo " + oInput.getValue());
		}

	});
	
});