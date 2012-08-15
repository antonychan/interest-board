YUI.add('pinboard-pin-model', function (Y) {
		
	PinModel = Y.Base.create('pinModel', Y.Model, [], {
		
		initializer: function(){
			
		}
		
	}, {
		ATTRS :{
			id: {value: 0},
			title: {value: ''},
			image: {value: ''},
			source: {value: ''},
			comments: {value: []},
			x: { value: 0 }, // horizontal position on the page used for absolute positioning
			y: { value: 0 }, // vertical position on the page 
			prev: { }, // stores a reference to the previous veritcal Pin
			next: { } // reference to the next Pin
		}
	});
	
	Y.namespace('Pinboard').PinModel = PinModel;
	
}, '0.0.1', {
	requires: ['model']
});