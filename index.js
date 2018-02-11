const emojis = {
	SlightlyFace: {
		plain: [r(':)')],
		pretty: '🙂',
		names: ['slightly face', 'slightly', 'smile']
	},
	GrinningFace: {
		plain: [r(':D')],
		pretty: '😀',
		names: ['grinning', 'mouth', 'showing teeth']
	},
	BeamingFaceWithSmilingEyes: {
		plain: [r('^_^'), r('☜(⌒▽⌒)☞')],
		pretty: '😁'
	},
	GrinningCatFace: {
		plain: ['₍˄·͈༝·͈˄₎◞ ̑̑ෆ⃛'],
		pretty: '😺'
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