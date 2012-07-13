YUI().use('app', 'app-transitions', 'io', 'handlebars', 'pinboard-pin-view', 'pinboard-pin-model', 'pinboard-pin-list', function(Y){
	
	var list = new Y.Pinboard.PinList();
	list.after("reset", function(e){
		var models = e.models,
			padding = 20,
			cols = 5,
			count = 0,
			row = 0,
			self = this,
			
			verticalPadding = 20,
			horizontalPadding = 20;
			
		Y.Array.each(models, function(model){
			var view;
			
			model.set("x", ((count % cols) * 222) + (padding*(count % cols)) + horizontalPadding);
			if(row != 0){
				//model.set("y", (models[count - cols].get("height")) + (models[count - cols].get("y")) + (padding));
				model.set("prev", (models[count - cols]));
				models[count - cols].set("next", model);
			}
			
			view = new Y.Pinboard.PinView({
				model: model
			}).render();
			
			count = count + 1;
			
			if((count%cols) === 0){
				row = row + 1;
			}
			
		});
	});
	list.load();
	
});
