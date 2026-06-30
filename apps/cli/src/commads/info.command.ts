import { Command } from "commander";

export const infoCommand = new Command("info")
  .description("Show CLI information")
  .action(() => {
    console.log(`
Varex CLI

Version: 1.0.0
Author: Andrew
Runtime: Node.js
Language: TypeScript
    `);
  });