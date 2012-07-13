YUI.add('pinboard-board-view', function (Y) {

	BoardView = Y.Base.create('boardView', Y.View, [] , {
		container: '<li class="request-item"></li>',
		
		template: '<div>{title} {bugzilla}</div>',
		
		initializer: function(){
			var model = this.model;
			model.after('change', this.render, this);
		},
		
		render: function(){
			var container = this.container,
				model = this.model;
				
			container.setContent(Y.Lang.sub(this.template, {
				title : model.get('title'),
				bugzilla: model.get('bugzilla')
			}));
			
			return this;
		}
	},{
		ATTRS: {
			pageWidth: { value: 1024 },
			pinWidth: { value: 192 }
		}
	});
	
	Y.namespace('Pinboard').BoardView = BoardView;

}, '0.0.1', {
	requires: ['view']
});