var ini = require('ini');
var fs = require('fs');
var path = require('path');
var _ = require('lodash');

module.exports = function(settings) {
    settings = _.merge(require('./defaults.json'), settings);
    var command = wrapQuotes(settings.launcher.path);

    command += ' ' + wrapQuotes(settings.app);

    return command;
};

function wrapQuotes(str) {
    return '"' + str + '"';
}
