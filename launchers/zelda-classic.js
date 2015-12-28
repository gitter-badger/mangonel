var path = require('path');

module.exports = function(settings) {
    var command = wrapQuotes(settings.launcher.path);

    // if (process.platform == "linux") {

    // }

    command = 'start ' + wrapQuotes(settings.launcher.name) + ' /D ' + wrapQuotes(path.dirname(settings.launcher.path)) + ' ' + command;

    if (settings.options.saves) {
        command += ' -savefile ' + wrapQuotes(settings.options.saves);
    }

    if (settings.options.video.fullscreen) {
        command += ' -fullscreen';
    }

    //start "zeldaw" /D "D:\games\emulators\Zelda-Classic-2.50.1\" "D:\games\emulators\Zelda-Classic-2.50.1\zelda-w.exe" "D:\games\binaries\zc\ToTheTop.qst"

    command += ' ' + wrapQuotes(settings.app);

    return command;
}

function wrapQuotes(str) {
    return '"' + str + '"';
}
