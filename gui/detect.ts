const platform = require('os').platform();

const platformp = document.getElementById("platform");
const startbtn = document.getElementById("start-button");
startbtn.onclick = function() {
    if (platform === "darwin") {
        platformp.innerHTML = "Platform detected: macOS";
    }
    if (platform === "win32") {
        platformp.innerHTML = "Platform detected: Windows";
    }
};

