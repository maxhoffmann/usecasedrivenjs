// Spec "Create Order
/* global App */
"use strict";

describe('Create Order', function () {

	beforeEach(function () {
		App.EntityGateway = {};
		App.EntityGateway.Storage = {
			Order: { save: function() {} }
		};
	});
	afterEach(function () {
		delete App.EntityGateway;
	});

	it('should throw an error when no argument has been passed', function () {
		var passingNoOrder = function() {
			App.UseCase.createOrder();
		};

		expect(passingNoOrder).to.throw(Error);
	});

	it('should return a new order with an orderId', function () {
		var newOrderRequest = {
			customerId: 1,
			shipmentDestination: 'city',
			paymentInformation: 'credit card',
			customerContactInfo: 'contact info',
			shipmentMechanism: 'shipment'
		};

		var newOrder = App.UseCase.createOrder( newOrderRequest );
		newOrderRequest.orderId = newOrder.orderId;

		expect(newOrder.orderId).to.be.a("number");
		expect(newOrder).to.deep.equal(newOrderRequest);
	});

	it('should generate a new id for each order', function () {
		var newOrderRequest = {
			customerId: 1,
			shipmentDestination: 'city',
			paymentInformation: 'credit card',
			customerContactInfo: 'contact info',
			shipmentMechanism: 'shipment'
		};

		var newOrder1 = App.UseCase.createOrder( newOrderRequest );
		var newOrder2 = App.UseCase.createOrder( newOrderRequest );

		expect(newOrder1.orderId).to.not.equal(newOrder2.orderId);
	});

});
