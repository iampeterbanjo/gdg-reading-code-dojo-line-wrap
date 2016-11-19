var lineWrapper = require('./lineWrapper.js');
var mocha = require('mocha');
var assert = require('assert');

describe('lineWrapper', function() {
	it('should return nothing for an empty string', function() {
		assert.equal(lineWrapper(), '');
	});

	it('should return text given no column width', function() {
		var expected = 'Hello world';
		var result = lineWrapper('Hello world');

		assert.equal(result, expected);
	});

	// Colmn width is defined as 0...n

	it('should add line break at given column width', function() {
		var text = 'The quick brown fox jumped over the lazy dog';
		var columnWidth = 3;
		var result = lineWrapper(text, columnWidth).indexOf('\n');

		assert.equal(result, columnWidth);
	});

	it('should add line break at every column width', function() {
		var text = 'The quick brown fox jumped over the lazy dog';
		var columnWidth = 3;

		var result = lineWrapper(text, columnWidth).split('\n');

		var allSameWidth = result.reduce(function(prev, current){
			return prev && (current.length === columnWidth || current.length < columnWidth);
		}, true);

		assert.ok(allSameWidth);
	});
});
