YUI.add('pinboard-board-view', function (Y) {

	BoardView = Y.Base.create('boardView', Y.View, [] , {
				
		initializer: function(){
			this.pinList = new Y.Pinboard.PinList();
			this.pinList.after("reset", this.reset, this);
			this.pinList.load();

		},
		
		render: function(){
			var container = this.container,
				model = this.model;
			
			return this;
		},

		reset : function(e){
			var fragment = Y.one(Y.config.doc.createDocumentFragment()),
				models = e.models,

				pinWidth = this.get('pinWidth'),

				padding = this.get('padding'),
				columns = this.get('columns'),
					
				verticalPadding = this.get('verticalPadding'),
				horizontalPadding = this.get('horizontalPadding'),

				count = 0,
				row = 0;

			Y.Array.each(models, function(model){
				var view,
					columnPosition = (count % columns);
				
				model.set("x", (columnPosition * pinWidth) + (padding * columnPosition) + horizontalPadding);
				
				if(row != 0){
					model.set("prev", (models[count - columns]));
					models[count - columns].set("next", model);
				}

				view = new Y.Pinboard.PinView({
					model: model
				}).render().get("container");

				count = count + 1;
			
				if((count%columns) === 0){
					row = row + 1;
				}

				fragment.append(view);
				
			});

			Y.one("#appview").append(fragment);
		}
	},{
		ATTRS: {
			pageWidth: { value: 1024 },
			pinWidth: { value: 222 },

			columns: { value: 5 },
			padding: { value: 20 },

			horizontalPadding : { value : 20},
			verticalPadding : { value: 20 }
		}
	});
	
	Y.namespace('Pinboard').BoardView = BoardView;

}, '0.0.1', {
	requires: ['view', 'app', 'app-transitions', 'io', 'handlebars', 'pinboard-pin-view', 'pinboard-pin-model', 'pinboard-pin-list', 'pinboard-board-view']
});