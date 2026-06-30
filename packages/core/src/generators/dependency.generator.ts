export class DependencyGenerator {
  getDependencies(framework: string): string[] {
    const dependencies: Record<string, string[]> = {
      express: ["express"],
      nest: ["@nestjs/core"],
    };

    return dependencies[framework] || [];
  }
}