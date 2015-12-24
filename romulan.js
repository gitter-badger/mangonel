var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));
var _ = require('lodash');
var util = require('util');
var cp = require("child_process");

var romulanDefaults = {
  'filename': "./defaults.json"
};

module.exports = function(obj) {
    return new Promise(function(resolve, reject) {
        romulanDefaults['json'] = require(romulanDefaults['filename']);
        settings = Object.assign(romulanDefaults['json'], obj);

        var missing = _.isEmpty(settings.launcher.path) ||
              _.isEmpty(settings.launcher.name) ||
              _.isEmpty(settings.app);

        if (missing) {
          throw "Missing information";
        }

        command = buildCommand(settings);
        console.log(settings, command);
        cp.exec(command);

        return resolve(cp);
    });
};

function buildCommand(settings) {
    var command = settings.launcher.path;

    if (process.platform == "linux") {

    }

    else if (process.platform == "windows") {
      command = 'start ' + command;
    }

    if (settings.options.fullscreen) {
        //command += ' --fullscreen';
    }

    command += ' ' + settings.app;

    return command;
}
