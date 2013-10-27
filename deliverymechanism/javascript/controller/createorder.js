// Controller "Create Order"

JS.Controller.createOrder = (function() {

	var button = document.querySelector('input[type=submit]');
	var form = document.querySelector('form');

	button.onclick = function( event ) {
		event.preventDefault();

		// Request Model
		var newOrderRequest = {
			customerId: form.customerId.value,
			shipmentDestination: form.shipmentDestination.value,
			paymentInformation: form.paymentInformation.value,
			customerContactInfo: form.customerContactInfo.value,
			shipmentMechanism: form.shipmentMechanism.value
		};

		// 1. Order clerk issues "Create Order" command with above data
		JS.Presenter.Order.render(
			App.UseCase.createOrder( newOrderRequest ) // Boundary returns Response Model
		);
	};

})();
