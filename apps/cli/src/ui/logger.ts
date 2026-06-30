import { colors } from "./colors.js";

export const logger = {
    success(message: string) {
        console.log(colors.success(`✔ ${message}`));
    },

    error(message: string) {
        console.log(colors.error(`✖ ${message}`));
    },

    warning(message: string) {
        console.log(colors.warning(`⚠ ${message}`));
    },

    info(message: string) {
        console.log(colors.info(`ℹ ${message}`));
    },
};