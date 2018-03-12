const browserSync = require('browser-sync');
const app = browserSync.create('app');
const cdn = browserSync.create('cdn');

const cdnPort = 8080;
cdn.init({
  proxy: {
    target: 'https://app.cdntwrk-dev.com',
  },
  port: cdnPort,
  ui: {
    port: cdnPort + 1,
  },
});
const cdnIp = cdn.instance.utils.devIp[0];
const cdnUrl = `https://${cdnIp}:${cdnPort}`;
app.init({
  proxy: {
    target: 'https://app.uberflip-dev.com/',
  },
  rewriteRules: [
    {
      match: /https:\/\/app\.cdntwrk-dev\.com/g,
      fn: function(req, res, match) {
        return cdnUrl;
      },
    },
  ],
});
