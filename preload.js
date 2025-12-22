import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
    selectDirectory: () => ipcRenderer.invoke("select-directory"),
    organizeDirectory: (directoryPath) =>
        ipcRenderer.invoke("organize-directory", directoryPath),
});
