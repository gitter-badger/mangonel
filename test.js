var romulan = require('./romulan');

var settings = {
    launcher: {
        name: "snes9x",
        path: "D:\\games\\emulators\\snes9x-1.53-win32\\snes9x.exe",
    },
    app: "D:\\games\\binaries\\snes\\Super Mario World.smc",
    options: {
        "video": {
            "vsync": true,
            "fullscreen": true,
            "resolution": {
                "width": 1920,
                "height": 1080
            }
        }
    }
}

// var settings = {
//     launcher: {
//         name: "bizhawk",
//         path: "D:\\games\\emulators\\BizHawk-1.11.4\\emuhawk.exe",
//     },
//     app: "D:\\games\\binaries\\pce\\Galaga '90 (USA).pce",
//     options: {
//         fullscreen: true,
//         vsync: true,
//         stretch: false
//     }
// }

// var settings = {
//     "launcher": {
//         "name": "vba-m",
//         "path": "D:\\games\\emulators\\VisualBoyAdvanceM-1229-win32\\VisualBoyAdvance-M.exe",
//     },
//     "app": "D:\\games\\binaries\\gba\\Zelda - The Minish Cap.gba",
//     "options": {
//         "video": {
//             "resolution": {
//                 "width": 1920,
//                 "height": 1080
//             }
//         }
//     }
// }

romulan(settings).then(function(res) {
    console.log(res);
})
.catch(function(err) {
    console.log(err.message);
});
