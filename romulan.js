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
        settings = _.merge(romulanDefaults['json'], obj);

        var missing = _.isEmpty(settings.launcher.path) ||
              _.isEmpty(settings.launcher.name) ||
              _.isEmpty(settings.app);

        if (missing) {
          throw "Missing information";
        }

        console.log(romulanDefaults['json'], settings);

        launcher = require('./launchers/' + settings.launcher.name);
        command = launcher(settings);

        // command = buildCommand(settings);
        // console.log(settings, command);
        cp.exec(command/*, {
            cwd: 'D:\\games\\emulators\\snes9x-1.53-win32\\'
        }*/);

        // return resolve(cp);
        return resolve(command);
    })
    .catch(function(err) {
        console.log(err.message);
    });
};
