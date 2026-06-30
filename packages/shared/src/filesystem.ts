import fs from "node:fs";
import path from "node:path";

export const filesystem = {
  exists(filePath: string): boolean {
    return fs.existsSync(filePath);
  },

  createDirectory(directory: string): void {
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, {
        recursive: true,
      });
    }
  },

  read(directory: string): string[] {
    return fs.readdirSync(directory);
  },

  copy(source: string, destination: string): void {
    fs.cpSync(source, destination, {
      recursive: true,
    });
  },

  write(filePath: string, content: string): void {
    const dir = path.dirname(filePath);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, {
        recursive: true,
      });
    }

    fs.writeFileSync(filePath, content);
  },
};