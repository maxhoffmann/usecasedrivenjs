// Spec "Create Order
/* global test, throws, equal, ok, App */
"use strict";

module('Create Order', {

	setup: function() {
		App.EntityGateway.Storage = {
			Order: { save: function() {} }
		};
	},

	teardown: function() {
		delete window.App.EntityGateway.Storage;
	}

});

test("throw an error", function() {
	throws(function() {
		App.UseCase.createOrder();
	}, 'when no argument is passed');
});

test("return the new order", function() {
	var newOrderRequest = {
		customerId: 1,
		shipmentDestination: 'city',
		paymentInformation: 'credit card',
		customerContactInfo: 'contact info',
		shipmentMechanism: 'shipment'
	};

	var newOrder = App.UseCase.createOrder( newOrderRequest );

	equal(typeof newOrder.orderId, "number", 'with a new orderId');
	equal(newOrderRequest.customerId, newOrder.customerId, 'with the same customerId');
	equal(newOrderRequest.shipmentDestination, newOrder.shipmentDestination, 'with the same shipmentDestination');
	equal(newOrderRequest.paymentInformation, newOrder.paymentInformation, 'with the same paymentInformation');
	equal(newOrderRequest.customerContactInfo, newOrder.customerContactInfo, 'with the same customerContactInfo');
	equal(newOrderRequest.shipmentMechanism, newOrder.shipmentMechanism, 'with the same shipmentMechanism');
});

test("each order has a different id", function() {
	var newOrderRequest = {
		customerId: 1,
		shipmentDestination: 'city',
		paymentInformation: 'credit card',
		customerContactInfo: 'contact info',
		shipmentMechanism: 'shipment'
	};

	var newOrder1 = App.UseCase.createOrder( newOrderRequest );
	var newOrder2 = App.UseCase.createOrder( newOrderRequest );

	notEqual(newOrder1.orderId, newOrder2.orderId, 'two different orders');
});
