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

			if (this.validate(value)) {
				// if is valid, just return
				return value;

			} else {
				// coerce and return or throw error if really invalid
				var coerced = this.coerce(value);

				// if value is still invalid, throw error
				if (!this.validate(coerced)) {
					throw new Error(value + ' is not valid and cannot be validly coerced.');
				} else {
					return coerced;
				}
			}
		},

		add: function add(addition) {
			addition = this.evaluate(addition);

			return no(this.number + addition);
		},

		subtract: function subtract(subtraction) {

			subtraction = this.evaluate(subtraction);

			return no(this.number - subtraction);
		},

		multiply: function multiply(times) {
			times = this.evaluate(times);

			return no(this.number * times);
		},

		divide: function divide(times) {
			times = this.evaluate(times);

			return no(this.number / times);
		},

		value: function value() {
			return this.number;
		}
	});

	return no;
});