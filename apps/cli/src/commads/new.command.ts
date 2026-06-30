import { Command } from "commander";

import { frameworkPrompt } from "../prompts/framework.prompt.js";
import { languagePrompt } from "../prompts/language.prompt.js";

import { showBanner } from "../ui/banner.js";
import { logger } from "../ui/logger.js";

export const newCommand = new Command("new")
  .argument("<name>")
  .action(async (name) => {

    showBanner();

    const framework = await frameworkPrompt();
    const language = await languagePrompt();

    logger.success(`Project: ${name}`);
    logger.info(`Framework: ${String(framework)}`);
    logger.info(`Language: ${String(language)}`);
  });