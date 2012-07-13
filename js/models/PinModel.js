YUI.add('pinboard-pin-model', function (Y) {
	
	var CONSTANTS;
	
	PinModel = Y.Base.create('pinModel', Y.Model, [], {
		
		initializer: function(){
			
		},
		
		test: function(){
			console.log("test");
		}
		
	}, {
		ATTRS :{
			id: {value: 0},
			title: {value: ''},
			image: {value: ''},
			source: {value: ''},
			comments: {value: []},
			x: { value: 0 },
			y: { value: 0 },
			prev: { },
			next: { }
		}
	});
	
	Y.namespace('Pinboard').PinModel = PinModel;
	
}, '0.0.1', {
	requires: ['model']
});