import type { ProjectConfig } from "../types/project.types.js";

import { logger } from "../ui/logger.js";
import { generateService } from "./generate.service.js";
import { installService } from "./install.service.js";

export const projectService = {
  async create(config: ProjectConfig) {
    logger.info(`Creating ${config.name}...`);

    await generateService.generate(config);

    await installService.install();

    logger.success("Project created successfully");
  },
};