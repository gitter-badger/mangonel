var ini = require('ini');
var fs = require('fs');
var _ = require('lodash');

module.exports = function(settings) {
    settings = _.merge(require('./defaults.json'), settings);
    var command = wrapQuotes(settings.launcher.path);
    var iniFilePath = 'D:\\games\\emulators\\VisualBoyAdvanceM-1229-win32\\vbam.ini';
    var iniFile = ini.parse(fs.readFileSync(iniFilePath, 'utf-8'))

    // if (process.platform == "linux") {

    // }

    if (process.platform == "windows") {
      command = 'start ' + command;
    }

    iniFile.preferences.video = (settings.options.video.fullscreen) ? 11 : 2;
    iniFile.preferences.vsync = (settings.options.video.vsync) ? 1 : 0;
    iniFile.preferences.stretch = (settings.options.video.stretch) ? 1 : 0;

    if (settings.options.video.scaling === "nearest") {
      iniFile.preferences.d3dFilter = 0;
    }

    if (settings.options.video.resolution.width) {
      iniFile.preferences.fsWidth = settings.options.video.resolution.width;
    }

    if (settings.options.video.resolution.height) {
      iniFile.preferences.fsHeight = settings.options.video.resolution.height;
    }

    fs.writeFileSync(iniFilePath, ini.stringify(iniFile));

    command += ' ' + wrapQuotes(settings.app);

    return command;
};

function wrapQuotes(str) {
    return '"' + str + '"';
}
