export class TemplateRegistry {
  private templates = ["express", "nest"];

  getAll(): string[] {
    return this.templates;
  }

  exists(name: string): boolean {
    return this.templates.includes(name);
  }
}