import { Terminal } from 'xterm';
import fs from 'fs';
const termdiv = document.getElementById('terminal');

const startbtn = document.getElementById('start-button');

var term = new Terminal();
term.open(termdiv);
term.write('When you click start, the output will be shown here.\r\n');

// globally used functions
async function delay(time: number) {
    return new Promise(resolve => setTimeout(resolve, time*1000))
};

let actualConsoleLog = console.log; // real console.log is stored in this variable
console.log = function(text: any) { // overwriting the function
    term.write(text + '\r\n'); // example additon
}
// beginning of mac code
async function bringBackOldCursorMac() {
    var oldBackupDir = '/Applications/Roblox.app/Contents/Resources/content/textures/oldCursorBackup/';
    var oldCursorDir = '/Applications/Roblox.app/Contents/Resources/content/textures/ArrowCursor.png';
    var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/oldCursorBackup/ArrowCursor.png';
    if (!fs.existsSync(oldBackupDir)) {
        fs.mkdirSync(oldBackupDir);
    };
    console.log("Created backup directory #1");
    await delay(2);
    fs.copyFileSync(oldCursorDir, newDir);
    await delay(1);
    var oldCursorDir = '/Applications/Roblox.app/Contents/Resources/content/textures/ArrowFarCursor.png';
    var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/oldCursorBackup/ArrowFarCursor.png';
    await delay(1);
    fs.copyFileSync(oldCursorDir, newDir);
    await delay(1);
    var cursorBackup = '/Applications/Roblox.app/Contents/Resources/content/textures/cursorBackup';
    var oldDir = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowCursor.png';
    var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/cursorBackup/ArrowCursor.png';
    await delay(1);
    if (!fs.existsSync(cursorBackup)) {
        fs.mkdirSync(cursorBackup);
    };
    console.log("Created backup directory #2");
    await delay(2);
    fs.copyFileSync(oldDir, newDir);
    await delay(1);
    var oldDir = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowFarCursor.png';
    var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/cursorBackup/ArrowFarCursor.png';
    await delay(1);
    fs.copyFileSync(oldDir, newDir);
    await delay(1);
    var oldDir = '/Applications/Roblox.app/Contents/Resources/content/textures/oldCursorBackup/ArrowCursor.png';
    var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowCursor.png';
    await delay(1);
    fs.copyFile(oldDir, newDir, function (err: any) {
        if (err) throw err
        console.log('Copied ' + oldDir + ' to ' + newDir)
    });
    await delay(1);
    var oldDir = '/Applications/Roblox.app/Contents/Resources/content/textures/oldCursorBackup/ArrowFarCursor.png';
    var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowFarCursor.png';
    await delay(1);
    fs.copyFile(oldDir, newDir, function (err: any) {
        if (err) throw err
        console.log('Copied ' + oldDir + ' to ' + newDir)
        console.log("Successfully completed operation. Please restart your Roblox client.");
    });
}

function revertDefaultCursorMac() {
    var oldCursorDir = '/Applications/Roblox.app/Contents/Resources/content/textures/cursorBackup/ArrowCursor.png';
    var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowCursor.png';
    fs.copyFileSync(oldCursorDir, newDir);
    var oldCursorDir = '/Applications/Roblox.app/Contents/Resources/content/textures/cursorBackup/ArrowFarCursor.png';
    var newDir = '/Applications/Roblox.app/Contents/Resources/content/textures/Cursors/KeyboardMouse/ArrowFarCursor.png';
    fs.copyFileSync(oldCursorDir, newDir);
    console.log("Successfully completed operation. Please restart your Roblox client.");
}
// end of mac functions

startbtn.onclick = function() {
    if (process.platform === "darwin"){
        term.write('Platform detected: MacOS\r\n');
        bringBackOldCursorMac();
    } else if (process.platform === "win32"){
        term.write('Platform detected: Windows\r\n');

    }
    };