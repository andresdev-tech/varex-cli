export const validationUtil = {
    projectName(name: string): boolean {
        const regex = /^[a-z0-9-_]+$/;

        return regex.test(name);
    },

    isEmpty(value: string): boolean {
        return value.trim() === "";
    },

    isValidFramework(framework: string): boolean {
        const frameworks = [
            "express",
            "nest"
        ];

        return frameworks.includes(framework);
    }
};