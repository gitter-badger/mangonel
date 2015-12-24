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
        name: "snes9x",
        path: "D:\\games\\emulators\\snes9x-1.53-win32\\snes9x.exe",
    },
    app: "D:\\games\\binaries\\snes\\Super Mario World.smc",
    options: {
        fullscreen: true,
    }
}

romulan(settings).then(function(res) {
    console.log(res);
})
.catch(function(err) {
    console.log(err.message);
});
