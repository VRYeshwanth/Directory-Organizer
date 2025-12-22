import path from "path";
import fs from "fs/promises";

export async function organizeDirectory(directoryPath) {
    const items = await fs.readdir(directoryPath, { withFileTypes: true });

    for (const item of items) {
        if (!item.isFile()) continue;

        const fileName = item.name;
        const filePath = path.join(directoryPath, fileName);

        const extension = path.extname(filePath).slice(1).toLowerCase();

        if (!extension) continue;

        const destinationFolder = path.join(directoryPath, extension);

        await fs.mkdir(destinationFolder, { recursive: true });

        const destinationPath = path.join(destinationFolder, fileName);
        await fs.rename(filePath, destinationPath);
    }

    return { status: "Success" };
}
