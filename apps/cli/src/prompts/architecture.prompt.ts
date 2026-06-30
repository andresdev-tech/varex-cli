import { select } from "@clack/prompts";
import { ARCHITECTURES } from "../constants/architectures.js";

export async function architecturePrompt() {
    return await select({
        message: "Select architecture",
        options: ARCHITECTURES,
  });
}