(function(name, factory) {

	var mod = typeof define !== 'function' ?
		// node
		'.././src' :
		// browser
		'no',
		// dependencies for the test
		deps = [mod, 'should'];

	if (typeof define !== 'function') {
		// node
		factory.apply(null, deps.map(require));
	} else {
		// browser
		define(deps, factory);
	}

})('test', function(no, should) {
	'use strict';

	describe('addition', function () {

		it('basic', function () {

			var ten = no(10);

			ten.add(25).value().should.eql(35);

		});

		it('String', function () {
			var eleven = no(11);

			eleven.add('20').value().should.eql(31);
		});

		it('Crazy string error', function () {
			var twelve = no(12),
				control = false;

			try {
				twelve.add('qweq');
			} catch (e) {
				control = true;
			}

			control.should.eql(true);
		});

		it('NaN error', function () {

			var control = false;

			try {
				var notNumber = no(NaN);
			} catch (e) {
				control = true;
			}

			control.should.eql(true);
		})
	});
});
