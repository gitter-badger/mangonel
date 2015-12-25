module.exports = function(settings) {
    var command = wrapQuotes(settings.launcher.path);

    // if (process.platform == "linux") {

    // }

    if (process.platform == "windows") {
      command = 'start ' + command;
    }

    if (settings.options.fullscreen) {
        command += ' --fullscreen';
    }

    command += ' ' + wrapQuotes(settings.app);

    return command;
}

function wrapQuotes(str) {
    return '"' + str + '"';
}
