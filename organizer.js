import path from "path";
import fs from "fs/promises";

const EXTENSION_MAP = {
    Images: ["png", "jpg", "jpeg", "gif", "webp", "bmp", "svg"],
    Documents: ["txt", "doc", "docx", "ppt", "pptx", "xls", "xlsx", "csv"],
    Audio: ["mp3", "wav", "aac", "flac", "ogg"],
    Videos: ["mp4", "mkv", "avi", "mov", "wmv"],
    Archives: ["zip", "rar", "7z", "tar", "gz"],
    PDF: ["pdf"],
    Executables: ["exe", "msi", "apk", "bat", "sh"],
};

function getCategory(extension) {
    for (const category in EXTENSION_MAP) {
        if (EXTENSION_MAP[category].includes(extension)) return category;
    }
    return "Others";
}

export async function organizeDirectory(directoryPath) {
    const items = await fs.readdir(directoryPath, { withFileTypes: true });

    for (const item of items) {
        if (!item.isFile()) continue;

        const fileName = item.name;
        const filePath = path.join(directoryPath, fileName);

        const extension = path.extname(filePath).slice(1).toLowerCase();

        if (!extension) continue;

        const category = getCategory(extension);
        const destinationFolder = path.join(directoryPath, category);

        await fs.mkdir(destinationFolder, { recursive: true });

        const destinationPath = path.join(destinationFolder, fileName);
        await fs.rename(filePath, destinationPath);
    }

    return { status: "Success" };
}
