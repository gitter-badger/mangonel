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
        path: "/usr/bin/snes9x",
    },
    app: "/media/storage/bowser/games/binaries/snes/super-mario-world-2-yoshis-island.sfc"
}

romulan(settings).then(function(childProcess) {
    // console.log(res);
})
.catch(function(err) {
    console.log(err.message);
});
