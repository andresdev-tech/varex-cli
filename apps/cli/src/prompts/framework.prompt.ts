import { select } from "@clack/prompts";
import { FRAMEWORKS } from "../constants/frameworks.js";

export async function frameworkPrompt() {
    return await select({
        message: "Select a framework",
        options: FRAMEWORKS,
    });
}