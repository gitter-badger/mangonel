var romulan = require('./romulan');

// var settings = {
//     launcher: {
//         name: "snes9x",
//         path: "D:\\games\\emulators\\snes9x-1.53-win32\\snes9x.exe",
//     },
//     app: "D:\\games\\binaries\\snes\\Super Mario World.smc",
//     options: {
//         "video": {
//             "vsync": true,
//             "fullscreen": true,
//             "resolution": {
//                 "width": 1920,
//                 "height": 1080
//             }
//         }
//     }
// }

// var settings = {
//     "launcher": {
//         "name": "bizhawk",
//         "path": "D:\\games\\emulators\\BizHawk-1.11.4\\emuhawk.exe",
//     },
//     "app": "D:\\games\\binaries\\pce\\Galaga '90 (USA).pce",
//     "options": {
//         "video": {
//             "vsync": true,
//             "fullscreen": true,
//             "resolution": {
//                 "width": 1920,
//                 "height": 1080
//             }
//         }
//     }
// }

// var settings = {
//     "launcher": {
//         "name": "project64",
//         "path": "D:\\games\\emulators\\Project64-1.6-win32\\Project64.exe",
//     },
//     "app": "D:\\games\\binaries\\n64\\Super Mario 64.z64",
//     "options": {
//         "video": {
//             "vsync": true,
//             "fullscreen": true,
//             "resolution": {
//                 "width": 1920,
//                 "height": 1080
//             }
//         }
//     }
// }

var settings = {
    "launcher": {
        "name": "zelda-classic",
        "path": "D:\\games\\emulators\\Zelda-Classic-2.50.1\\zelda-w.exe",
    },
    "app": "S:\\games\\binaries\\zc\\ToTheTop.qst",
    "options": {
        "saves": "C:\\tmp",
        "video": {
            "vsync": true,
            "fullscreen": false,
            "resolution": {
                "width": 1920,
                "height": 1080
            }
        }
    }
}

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

// var settings = {
//     "launcher": {
//         "name": "steam-win",
//         "path": "C:\\Program Files (x86)\\Steam\\Steam.exe",
//     },
//     "app": "steam://rungameid/293300"
// }

romulan(settings).then(function(res) {
    console.log(res);
})
.catch(function(err) {
    console.log(err.message);
});
