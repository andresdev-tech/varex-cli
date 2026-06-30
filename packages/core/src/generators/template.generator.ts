import { filesystem } from "../../../shared/src/filesystem.js";
import { logger } from "../../../shared/src/logger.js";

export class TemplateGenerator {
  async generate(templatePath: string): Promise<void> {
    logger.info(`Generating template from: ${templatePath}`);

    const templateDir = "./templates/default";
    await filesystem.copy(templateDir, templatePath);
  }
}