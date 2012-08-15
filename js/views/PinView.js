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
			
			container.one("img").on('load', function(e){
				var previousPin = model.get("prev");

				if(previousPin){
					model.set("y", (previousPin.get("height")) + (previousPin.get("y")) + (20));
				}
				else {
					model.set("y", 20);
				}
				model.set("height", parseInt(container.one(".pin").getComputedStyle('height'), 10) + 15);
			});
			
			return this;
		}
	});
	
	Y.namespace('Pinboard').PinView = PinView;

}, '0.0.1', {
	requires: ['view']
});