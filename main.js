import {
    app,
    BrowserWindow,
    dialog,
    ipcMain,
    Menu,
    nativeImage,
} from "electron";
import path from "path";
import { fileURLToPath } from "url";
import { organizeDirectory } from "./organizer.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
    const iconPath = path.join(__dirname, "assets", "icon.ico");

    const mainWindow = new BrowserWindow({
        width: 600,
        height: 600,
        resizable: false,
        icon: iconPath,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            contextIsolation: true,
            nodeIntegration: false,
            sandbox: false,
        },
    });

    Menu.setApplicationMenu(null);
    mainWindow.loadFile("index.html");
}

ipcMain.handle("select-directory", async () => {
    const result = await dialog.showOpenDialog({
        properties: ["openDirectory"],
    });

    if (result.canceled) return null;

    return result.filePaths[0];
});

ipcMain.handle("organize-directory", async (_event, directoryPath) => {
    if (!directoryPath) throw new Error("No directory path provided !!");

    const result = await organizeDirectory(directoryPath);
    return result;
});

app.whenReady().then(createWindow);
