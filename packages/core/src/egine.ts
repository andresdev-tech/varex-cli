import { ProjectGenerator } from "./generators/project.generator.js";
import { DependencyGenerator } from "./generators/dependency.generator.js";
import { TemplateGenerator } from "./generators/template.generator.js";

export class Engine {
  private projectGenerator = new ProjectGenerator();
  private dependencyGenerator = new DependencyGenerator();
  private templateGenerator = new TemplateGenerator();

  async create(
    projectName: string,
    framework: string,
    templatePath: string,
  ): Promise<void> {
    await this.projectGenerator.generate(projectName);

    const dependencies =
      this.dependencyGenerator.getDependencies(framework);

    console.log("Dependencies:", dependencies);

    await this.templateGenerator.generate(templatePath);
  }
}