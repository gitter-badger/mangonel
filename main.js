var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));
var _ = require('lodash');
var util = require('util');
var cp = require("child_process");

var romulanDefaults = {
  'filename': "defaults.json"
};

exports.romulan = function(obj) {
  return fs.readFileAsync(romulanDefaults['filename']).then(function(content) {
    romulanDefaults['content'] = content;
    return Promise.resolve(content);
  })
  .then(function(content) {
    romulanDefaults['json'] = JSON.parse(content);
    return Promise.resolve();
  })
  .then(function() {
    settings = Object.assign(romulanDefaults['json'], obj);
    return Promise.resolve(settings);
  })
  .then(function(settings) {
      var missing = _.isEmpty(settings.launcher.path) ||
          _.isEmpty(settings.launcher.name) ||
          _.isEmpty(settings.app);

      if (missing) {
          throw "Missing information";
      }

      command = buildCommand(settings);
      cp.exec(command);

      return Promise.resolve(cp);
  });
};

function buildCommand(settings) {
      var command = settings.launcher.path + ' ' + settings.app;

      if (process.platform == "linux") {

      }

      else if (process.platform == "windows") {
          command = 'start ' + command;
      }

      return command;
}
