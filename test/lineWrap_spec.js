describe('lineWrap', () => {
	'use strict';

	let lineWrap = require('../lineWrap.js')
			, assert = require('assert');

	it('should return nothing for an empty string', () => {
		assert.equal(lineWrap(), '');
	});

	it('should return text given no column width', () => {
		let expected = 'Hello world'
				, result = lineWrap('Hello world');

		assert.equal(result, expected);
	});

	// Colmn width is defined as 0...n

	it('should add line break at given column width', () => {
		let text = 'The quick brown fox jumped over the lazy dog'
			, columnWidth = 3
			, result = lineWrap(text, columnWidth).indexOf('\n');

		assert.equal(result, columnWidth);
	});

	it('should add line break at every column width', () => {
		let text = 'The quick brown fox jumped over the lazy dog'
			, columnWidth = 3
			, result
			, allSameWidth;

		result = lineWrap(text, columnWidth).split('\n');

		allSameWidth = result.reduce((prev, current) => {
			return prev && (current.length === columnWidth || current.length < columnWidth);
		}, true);

		assert.ok(allSameWidth);
	});
});
