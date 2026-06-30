export const templateService = {
    getTemplate(framework: string) {
        const templates: Record<string, string> = {
            express: "express-template",
            nest: "nest-template",
        };

        return templates[framework];
    },
};