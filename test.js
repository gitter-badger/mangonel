romulan = require('./romulan');

// var settings = {
//     launcher: {
//         name: "snes9x",
//         path: "path/to/emu.exe",
//     },
//     app: "/path/to/roms.smc"
// }

var settings = {
    launcher: {
        name: "fceux",
        path: "/usr/bin/fceux",
    },
    app: "/media/storage/bowser/games/binaries/nes/duck-tales-2.nes",
    options: {
        fullscreen: true,
    }
}

romulan(settings).then(function(childProcess) {
    // console.log(res);
})
.catch(function(err) {
    console.log(err.message);
});
