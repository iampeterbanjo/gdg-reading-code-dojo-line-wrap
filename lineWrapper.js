module.exports = function(text, columnWidth) {
	if (!text) {
		return '';
	}

	if (!columnWidth) {
		return text;
	}

	var textArray = text.split('');
	var result = [];

	textArray.forEach(function(item, index) {
		if(index !== 0 && index % columnWidth === 0) {
			result.push('\n' + item);
		} else {
			result.push(item);
		}
	});

	return result.join('');
};
