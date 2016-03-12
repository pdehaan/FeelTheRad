const getConfig = require('hjs-webpack');

module.exports = getConfig({
  in: 'src/app.js',
  out: 'public',
  clearBeforeBuild: '!(CNAME|favicon.ico)',
  urlLoaderLimit: 1000
});
