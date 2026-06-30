import path from "path";

export const pathUtil = {
    root() {
        return process.cwd();
    },

    join(...paths: string[]) {
        return path.join(...paths);
    },

    resolve(...paths: string[]) {
        return path.resolve(...paths);
    },
};