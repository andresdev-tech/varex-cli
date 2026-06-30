export interface ProjectConfig {
    name: string;
    framework: string;
    language: string;
    database: string;
    architecture: string;
}

export interface TemplateConfig {
    framework: string;
    files: string[];
}