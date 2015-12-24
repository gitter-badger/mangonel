module.exports = function(appPath, options) {
    var command = settings.launcher.path;

    // if (process.platform == "linux") {

    // }

    if (process.platform == "windows") {
      command = 'start ' + command;
    }

    if (settings.options.fullscreen) {
        command += ' --fullscreen';
    }

    command += ' '  + ' "' + settings.app + '"';

    return command;
}
