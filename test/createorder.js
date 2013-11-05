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
		var OrderRequest = {
			customerId: 1,
			shipmentDestination: 'city',
			paymentInformation: 'credit card',
			customerContactInfo: 'contact info',
			shipmentMechanism: 'shipment'
		};

		var Order = App.UseCase.createOrder( OrderRequest );
		OrderRequest.orderId = Order.orderId;

		expect(Order.orderId).to.be.a("number");
		expect(Order).to.deep.equal(OrderRequest);
	});

	it('should generate a new id for each order', function () {
		var OrderRequest = {
			customerId: 1,
			shipmentDestination: 'city',
			paymentInformation: 'credit card',
			customerContactInfo: 'contact info',
			shipmentMechanism: 'shipment'
		};

		var Order1 = App.UseCase.createOrder( OrderRequest );
		var Order2 = App.UseCase.createOrder( OrderRequest );

		expect(Order1.orderId).to.not.equal(Order2.orderId);
	});

});
