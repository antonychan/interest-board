YUI().use "node", (Y) ->

	Y.namespace('Pinboard').BoardView = Y.Base.Create 'boardView', Y.View, [], {

		initializer : ->

		render : ->
			test = 2


	}, '0.0.1', {
		requires: ['view']
	}

