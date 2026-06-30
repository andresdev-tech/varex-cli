import fs from "fs";

export const fileUtil = {
    exists(path: string): boolean {
        return fs.existsSync(path);
    },

    create(path: string, content: string) {
        fs.writeFileSync(path, content);
    },

    read(path: string): string {
        return fs.readFileSync(path, "utf-8");
    },

    remove(path: string) {
        fs.unlinkSync(path);
    },
};