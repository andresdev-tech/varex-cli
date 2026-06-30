import fs from "fs";
import path from "path";

import type { ProjectConfig } from "../types/project.types.js";

import { logger } from "../ui/logger.js";

export const generateService = {
  async generate(config: ProjectConfig) {
    const projectPath = path.join(
      process.cwd(),
      config.name
    );

    try {
      fs.mkdirSync(projectPath);

      const packageJson = {
        name: config.name,
        version: "1.0.0",
      };

      fs.writeFileSync(
        path.join(projectPath, "package.json"),
        JSON.stringify(packageJson, null, 2)
      );

      logger.success("Base files generated");
    } catch {
      logger.error("Project generation failed");
    }
  },
};