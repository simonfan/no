//     No
//     (c) simonfan
//     No is licensed under the MIT terms.

/**
 * AMD and CJS module.
 *
 * @module No
 */

/* jshint ignore:start */
if (typeof define !== 'function') { var define = require('amdefine')(module) }
/* jshint ignore:end */

define(function (require, exports, module) {
	'use strict';

	var subject = require('subject');


	function notNaN(v) {
		return !isNaN(v);
	}

	var no = module.exports = subject({
		initialize: function initializeNo(number, options) {
			// make sure the number is a REAL NUMBER
			this.number = this.evaluate(number);
		},

		/**
		 *
		 *
		 *
		 *
		 */
		validate: function validate(value) {
			return typeof value === 'number' && notNaN(value);
		},

		/**
		 * Coerces the value to a valid number.
		 *
		 * @method coerce
		 * @param value *
		 */
		coerce: function coerceToNumber(value) {
			return parseInt(value, 10);
		},

		/**
		 * Does the process of
		 * [1] checking the validity of a value
		 * [2] coercing value to a valid one if needed
		 * [3] rechecking validity of a coerced value and throwing necessary errors
		 *
		 * @method evaluate
		 * @param value *
		 */
		evaluate: function evaluate(value) {
			return this.validate(value) ? value : this.coerce(value);
		},

		/**
		 * Ensures the validity of the wrapped number.
		 * Throws error if not valid
		 *
		 * @method ensureValidity
		 * @param msg {String}
		 *     Error message
		 */
		ensureValidity: function ensureValidity(msg) {
			if (!this.validate(this.number)) {
				msg = msg || 'is not a valid number.';
				throw new Error('Number ' + this.number + ' - ' + msg);
			}
		},

		add: function add(addition) {
			addition = this.evaluate(addition);

			this.number = this.number + addition;

			return this;
		},

		subtract: function subtract(subtraction) {

			subtraction = this.evaluate(subtraction);

			this.number = this.number - subtraction;

			return this;
		},

		multiply: function multiply(times) {
			times = this.evaluate(times);

			this.number = this.number * times;

			return this;
		},

		divide: function divide(times) {
			times = this.evaluate(times);

			this.number = this.number / times;

			return this;
		},


		isGt: function gt(comparison) {
			comparison = this.evaluate(comparison);

			return this.number > comparison;
		},

		isGte: function gte(comparison) {
			comparison = this.evaluate(comparison);

			return this.number >= comparison;
		},

		isLt: function lt(comparison) {
			comparison = this.evaluate(comparison);

			return this.number < comparison;
		},

		isLte: function lte(comparison) {
			comparison = this.evaluate(comparison);

			return this.number <= comparison;
		},

		value: function value() {
			return this.number;
		}
	});

	return no;
});
