const fs = require('fs');
const dotenv = require('dotenv');
const { randomBytes } = require('crypto');
const locate = require('../util/locate');

module.exports = {
	build() {
		dotenv.config();
		const dirs = ['data'];
	
		dirs.forEach(dir => fs.mkdirSync(locate(dir), { recursive: true }));
		
		const secret = randomBytes(Math.floor((Math.random() * 24) + 16)).toString('hex');
		const json = { expiresIn: 3600, secret };

		fs.writeFileSync(locate('data/auth.json'), JSON.stringify(json));

		global.refreshTokens = {};
	},

	destroy() { }
}
