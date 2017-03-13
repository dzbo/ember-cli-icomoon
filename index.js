/* jshint node: true */
'use strict';

var merge         = require('merge');
var argv          = require('optimist');
var IcomoonBuild  = require('icomoon-build/lib/cli');
var replace       = require('replace');
var git           = require('git-utils');

module.exports = {
  name: 'ember-cli-icomoon',

  options: function() {
    return this._options = this._options || merge(true, {},
      this.app.options.icomoon || {});
  },

  serverMiddleware() {
    var options = this.options();
    var cmd = argv([
      '--project',
      options.projectFile,
      '--css',
      options.styleOutputFile,
      '--fonts',
      options.fontsOutputFolder
    ]).argv;

    let repo = git.open('.');

    if (typeof options.projectFile === 'undefined') {
      console.log('No Icomoon project file');
      return;
    }

    if (repo.isPathNew([options.projectFile]) ||
        repo.isPathModified([options.projectFile])) {
      IcomoonBuild(cmd, function() {
        replace({
          regex: "fonts/icomoon",
          replacement: "/fonts/icomoon",
          paths: [options.styleOutputFile],
          recursive: true,
          silent: true,
        });
      });
    }
  }
};
