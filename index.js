const emojis = require('./emojis');

/**
 * 
 * @param {string} base_str 
 * @returns {RegExp}
 */
function r(base_str) {
	let re = ''
	for (let i = 0; i < base_str.length; i++) {
		re += `\\${base_str[i]}`;
	}
	return new RegExp(`(${re.trim()})`, 'g');
}

/**
 * 
 * @param {string} text 
 */
function translate(text) {
	for (const iterator of emojis) {
		const pretty = iterator.pretty;
		const plain = iterator.plain;
		for (const emoji of plain) {
			text = text.replace(emoji, pretty);
		}
	}
	return text;
}

module.exports = {
	emojis: emojis,
	translate: translate
}