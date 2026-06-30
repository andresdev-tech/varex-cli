import { execSync } from "child_process";

import { logger } from "../ui/logger.js";

export const installService = {
    async install() {
        try {
            logger.info("Installing dependencies...");

            execSync("pnpm install", {
                stdio: "inherit",
            });

            logger.success("Dependencies installed");
        } catch {
            logger.error("Failed to install dependencies");
        }
    },
};