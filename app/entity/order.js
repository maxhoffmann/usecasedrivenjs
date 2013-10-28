// Entity Order

App.Entity.Order = (function() {

	var orderId = 1;

	function Order( data ) {
		this.orderId = orderId++;

		this.customerId = data.customerId;
		this.shipmentDestination = data.shipmentDestination;
		this.paymentInformation = data.paymentInformation;
		this.customerContactInfo = data.customerContactInfo;
		this.shipmentMechanism = data.shipmentMechanism;
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
