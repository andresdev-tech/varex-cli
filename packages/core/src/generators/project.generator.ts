import { filesystem } from "../../../shared/src/filesystem.js";
import { logger } from "../../../shared/src/logger.js";

export class ProjectGenerator {
  async generate(projectName: string): Promise<void> {
    logger.info(`Generating project: ${projectName}`);

    await filesystem.ensureDir(projectName);
  }
}