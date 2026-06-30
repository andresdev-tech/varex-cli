import fs from "fs";

export const packageUtil = {
    getPackageInfo() {
        try {
            const content = fs.readFileSync(
                "package.json",
                "utf-8"
            );

            return JSON.parse(content);
        } catch {
            return null;
        }
    },

    getVersion(): string {
        const pkg = this.getPackageInfo();

        return pkg?.version || "unknown";
    },

    getName(): string {
        const pkg = this.getPackageInfo();

        return pkg?.name || "unknown";
    }
};