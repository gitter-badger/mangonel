var ini = require('ini');
var fs = require('fs');
var path = require('path');
var _ = require('lodash');

function stripExtra(str) {
  return str.replace(/["]/gi, '').trim();
}

/**
 * There appears to be a bug somewhere (ini or snes9x) where several directory
 * entries are not getting parsed correctly. This is quick fix to prevent This
 * from happening
 * @param {Object} iniFile
 * @return {Object} iniFile
 */
function pathBugFix(iniFile) {
    var section = 'Settings\\Win\\Files';
    var toFix = [
      'Dir:Roms',
      'Dir:Screenshots',
      'Dir:Movies',
      'Dir:SPCs',
      'Dir:Savestates',
      'Dir:SRAM',
      'Dir:Patches',
      'Dir:Bios',
    ];

    toFix.forEach(function(key) {
      iniFile[section][key] = stripExtra(iniFile[section][key]);
    });

    return iniFile;
}

module.exports = function(settings) {
    settings = _.merge(require('./defaults.json'), settings);
    var command = wrapQuotes(settings.launcher.path);
    var configFile = "snes9x.conf";
    var iniFilePath = path.join(path.dirname(settings.launcher.path), configFile);
    var iniFile = ini.parse(fs.readFileSync(iniFilePath, 'utf-8'));

    iniFile = pathBugFix(iniFile);

    // if (process.platform == "linux") {

    // }

    // if (process.platform == "windows") {
      command = 'start ' + wrapQuotes(settings.launcher.name)  + ' ' + command;
    // }

    // if (settings.options.video.fullscreen) {
    //     command += ' -fullscreen';
    // }

    // Disable on screen messages
    iniFile['Settings']['MessageDisplayTime'] = 0;

    iniFile['Display\\Win'].Vsync = (settings.options.video.vsync) ? "TRUE" : "FALSE";
    iniFile['Display\\Win']['Fullscreen:Enabled'] = (settings.options.video.fullscreen) ? "TRUE" : "FALSE";
    iniFile['Display\\Win']['Fullscreen:Width'] = (settings.options.video.resolution.width) || iniFile['Display\\Win']['Fullscreen:Width'];
    iniFile['Display\\Win']['Fullscreen:Height'] = (settings.options.video.resolution.height) || iniFile['Display\\Win']['Fullscreen:Height'];
    // iniFile.preferences.stretch = (settings.options.video.stretch) ? 1 : 0;

    if (settings.options.video.scaling === "nearest") {
      iniFile['Display\\Win']['Stretch:BilinearFilter'] = "FALSE";
    }

    else if (settings.options.video.scaling === "bilinear") {
      iniFile['Display\\Win']['Stretch:BilinearFilter'] = "TRUE";
    }
    //
    // if (settings.options.video.resolution.width) {
    //   iniFile.preferences.fsWidth = settings.options.video.resolution.width;
    // }
    //
    // if (settings.options.video.resolution.height) {
    //   iniFile.preferences.fsHeight = settings.options.video.resolution.height;
    // }

    fs.writeFileSync(iniFilePath, ini.stringify(iniFile));

    command += ' ' + wrapQuotes(settings.app);

    return command;
};

function wrapQuotes(str) {
    return '"' + str + '"';
}
