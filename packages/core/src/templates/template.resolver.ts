import path from "node:path";

export class TemplateResolver {
  resolve(
    framework: string,
    architecture: string,
    language: string,
  ): string {
    return path.join(
      "templates",
      framework,
      architecture,
      language,
    );
  }
}