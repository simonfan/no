require.config({
	urlArgs: 'bust=0.02443505311384797',
	baseUrl: '/src',
	paths: {
		requirejs: '../bower_components/requirejs/require',
		text: '../bower_components/requirejs-text/text',
		mocha: '../node_modules/mocha/mocha',
		should: '../node_modules/should/should',
		no: 'index',
		'requirejs-text': '../bower_components/requirejs-text/text',
		jquery: '../bower_components/jquery/dist/jquery',
		qunit: '../bower_components/qunit/qunit/qunit',
		underscore: '../bower_components/underscore/underscore',
		lodash: '../bower_components/lodash/dist/lodash.compat',
		subject: '../bower_components/subject/built/subject'
	},
	shim: {
		backbone: {
			exports: 'Backbone',
			deps: [
				'jquery',
				'underscore'
			]
		},
		underscore: {
			exports: '_'
		},
		mocha: {
			exports: 'mocha'
		},
		should: {
			exports: 'should'
		}
	}
});
