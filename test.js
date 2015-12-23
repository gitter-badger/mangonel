romulan = require('./main').romulan;

var settings = {
    launcher: {
        name: "snes9x",
        path: "path/to/emu.exe",
    },
    app: "/path/to/roms.smc"
}

romulan(settings)
.then(function(res) {
    console.log(res);
})
.catch(function(err) {
    console.log(err.message);
});
