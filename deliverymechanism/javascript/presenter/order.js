// Presenter Order

JS.Presenter.Order = {

	element: document.getElementById('result'),

	render: function( order ) {
		this.element.innerHTML = JS.ViewModel.Order.parse( order );
	}

};
