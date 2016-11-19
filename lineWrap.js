module.exports = (text, columnWidth) => {
	'use strict';

	if (!text) {
		return '';
	}

	if (!columnWidth) {
		return text;
	}

	let textArray = text.split('')
			, result = [];

	textArray.forEach(function(item, index) {
		if(index !== 0 && index % columnWidth === 0) {
			result.push('\n' + item);
		} else {
			result.push(item);
		}
	});

	return result.join('');
};
