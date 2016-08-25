
var path = require('path');
var serverBaseDir = path.normalize('./../server');
var appRoot = 'src/';
var outputRoot = 'dist/';
var nodeStartupScript = 'app.js';
var exportSrvRoot = 'export/';
module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  css: appRoot + '**/*.css',
  style: 'styles/**/*.css',
  output: outputRoot,
  exportSrv: exportSrvRoot,
  sourceMapRelativePath: '/src',
  doc:'./doc',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/',
  //change to 9000 for prod, 5000 dev
  //config.port
  nodeJsPort: 9000,
  webServerPort : 4000,
  serverBaseDir : serverBaseDir,
  nodeStartUpScriptPath : path.join( serverBaseDir,  nodeStartupScript)
};
