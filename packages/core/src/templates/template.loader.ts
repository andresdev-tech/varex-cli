import fs from "node:fs";

export class TemplateLoader {
  load(path: string): string[] {
    return fs.readdirSync(path);
  }
}