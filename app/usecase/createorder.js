// UseCase "Create Order"

App.UseCase.createOrder = function( orderRequest ) {

	// 2. System validates all data
	var isValidOrder = App.Entity.Order.validate( orderRequest );

	// Exception Course: Validation Error
	if ( !isValidOrder ) throw new Error('Order Request is not valid');

	// 3. System creates order and determines order-id
	var order = new App.Entity.Order( orderRequest );

	// 3.1 System saves new Order
	App.EntityGateway.Storage.Order.save( order );

	// 4. System delivers order-id to clerk
	return order;

};
