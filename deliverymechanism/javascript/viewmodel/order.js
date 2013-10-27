// ViewModel Order

JS.ViewModel.Order = {
	parse: function( order ) {
		return JS.View.Order
			.replace('{{orderId}}', order.orderId)
			.replace('{{customerId}}', order.customerId)
			.replace('{{shipmentDestination}}', order.shipmentDestination)
			.replace('{{paymentInformation}}', order.paymentInformation)
			.replace('{{customerContactInfo}}', order.customerContactInfo)
			.replace('{{shipmentMechanism}}', order.shipmentMechanism);
	}
};
