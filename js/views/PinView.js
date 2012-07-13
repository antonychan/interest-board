YUI.add('pinboard-pin-view', function (Y) {

	PinView = Y.Base.create('pinView', Y.View, [] , {
		//container: Y.Node.create('<div class="pin"/>'),
		
		template: Y.one("#pin-view").getContent(),
		
		initializer: function(){
			var model = this.get("model");
			model.after('yChange', this.render, this);
		},
		
		render: function(){
			var container = this.get('container'),
				model = this.get('model'),
				content,
				html = Y.Lang.sub(this.template, model.toJSON());
			
			container.setContent(html);
			
			Y.one("#appview").append(container);

			container.one("img").on('load', function(e){
				if(model.get("prev")){
					model.set("y", (model.get("prev").get("height")) + (model.get("prev").get("y")) + (20));
				}
				else {
					model.set("y", 20);
				}
				model.set("height", parseInt(container.one(".pin").getComputedStyle('height')) + 15);
			});
			
			container.one("img").on('error', function(e){
				console.log("hi");
			});
			
			return this;
		}
	});
	
	Y.namespace('Pinboard').PinView = PinView;

}, '0.0.1', {
	requires: ['view']
});