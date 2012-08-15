YUI.add('pinboard-pin-view', function (Y) {

	PinView = Y.Base.create('pinView', Y.View, [] , {
		
		template: Y.one("#pin-view").getContent(),
		
		initializer: function(){
			var model = this.get("model");
			model.after('yChange', this.render, this);
		},
		
		render: function(){
			var container = this.get('container'),
				model = this.get('model'),
				html = Y.Lang.sub(this.template, model.toJSON());
			
			container.setContent(html);
			
			// When the image is done loading, force the Pin to 
			// rearrange itself appropriately on the board
			container.one("img").on('load', function(e){
				var previousPin = model.get("prev");

				// Check to see if we are on the first row
				if(previousPin){
					// If we are NOT on the first row, set the vertical position of this Pin
					// in relation to the previous pin
					model.set("y", (previousPin.get("height")) + (previousPin.get("y")) + (20));
				}
				else {
					model.set("y", 20);
				}

				// Set the height of this Pin based on the computed style (after the image loads)
				model.set("height", parseInt(container.one(".pin").getComputedStyle('height'), 10) + 15);
			});
			
			return this;
		}
	});
	
	Y.namespace('Pinboard').PinView = PinView;

}, '0.0.1', {
	requires: ['view']
});