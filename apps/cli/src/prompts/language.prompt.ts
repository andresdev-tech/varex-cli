import { select } from "@clack/prompts";

export async function languagePrompt() {
    return await select({
        message: "Select a language",
        options: [
            {
                value: "typescript",
                label: "TypeScript",
            },
            {
                value: "javascript",
                label: "JavaScript",
            },
        ],
    });
}