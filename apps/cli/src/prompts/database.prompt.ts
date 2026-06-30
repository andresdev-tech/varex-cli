import { select } from "@clack/prompts";
import { DATABASES } from "../constants/databases.js";

export async function databasePrompt() {
    return await select({
        message: "Select database",
        options: DATABASES,
    });
}