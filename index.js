var cats = require('./ascii/cats.json');

const emojis = {
	SlightlyFace: {
		plain: [':)', ':-)', '=]', '=)', ':]'],
		pretty: '🙂',
		names: ['slightly face', 'slightly', 'smile']
	},
	GrinningFace: {
		plain: [':D', ':-D', '=D'],
		pretty: '😀',
		names: ['grinning', 'mouth', 'showing teeth']
	},
	SweatSmile: {
		plain: ['\':)', '\':-)', '\'=)', '\':D', '\':-D', '\'=D'],
		pretty: '😓'
	},
	Laughing: {
		plain: ['>:)', '>;)', '>:-)', '>=)'],
		pretty: '😂'
	},
	WinkingFace: {
		plain: [';)', ';-)', '*-)', '*)', ';-]', ';]', ';D', ';^)'],
		pretty: '😉',
		names: ['Wink', 'Wink Face', 'Winky Face']
	},
	DowncastFaceSweat: {
		plain: ['\':(', '\':-(', '\'=(', '\'=['],
		pretty: '😓',
		names: [' Hard Work', 'Sad Sweat Face']
	},
	BeamingFaceWithSmilingEyes: {
		plain: ['^_^', '☜(⌒▽⌒)☞'],
		pretty: '😁'
	},
	CatFace: {
		plain: cats,
		pretty: '😺'
	},
	PersonShrugging: {
		plain: ['¯\\_(ツ)_/¯', '¯\\_( ͡° ͜ʖ ͡°)_/¯'],
		pretty: '🤷'
	},
	KissingHeart: {
		plain: [':*', ':-*', '=*', ':^*'],
		pretty: '😘',
		names: ['Blow A Kiss', 'Blowing Kiss', 'Kissing']
	},
	Heart: {
		plain: ['<3'],
		pretty: '❤️'
	}
}

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
	for (const key in emojis) {
		const pretty = emojis[key]['pretty'];
		const plain = emojis[key]['plain'];
		plain.forEach(emoji_regexp => {
			text = text.replace(emoji_regexp, pretty);
		});
	}
	return text;
}

module.exports = {
	emojis: emojis,
	translate: translate
}