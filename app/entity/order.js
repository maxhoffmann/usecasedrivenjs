// Entity Order

App.Entity.Order = (function() {

	var orderId = 1;

	function Order( order ) {
		this.orderId = orderId++;

		this.customerId = order.customerId;
		this.shipmentDestination = order.shipmentDestination;
		this.paymentInformation = order.paymentInformation;
		this.customerContactInfo = order.customerContactInfo;
		this.shipmentMechanism = order.shipmentMechanism;
	}

	Order.validate = function( order ) {
		if (order === undefined) {
			throw new Error('no order passed');
		}

		// some existence checking here
		// you should do real validation!
		return order.customerId
			&& order.shipmentDestination
			&& order.paymentInformation
			&& order.customerContactInfo
			&& order.shipmentMechanism;
	};

	return Order;

})();
