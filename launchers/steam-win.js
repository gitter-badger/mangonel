module.exports = function(settings) {
    var command = wrapQuotes(settings.launcher.path);
    command = 'start ' + command;
    command += ' ' + wrapQuotes(settings.app);

    return command;
}

function wrapQuotes(str) {
    return '"' + str + '"';
}
