const url = 'https://app.romern.dev.flyptech.com'; //'https://app.romern.dev.flyptech.com'
const browserSync = require('browser-sync');

browserSync({
	proxy: {
		target: url
	},
	serveStatic: ['.']
});
