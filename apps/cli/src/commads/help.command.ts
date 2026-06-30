import { Command } from "commander";

export const helpCommand = new Command("help")
  .description("Show available commands")
  .action(() => {
    console.log(`
Available commands:

varex new <name>
Create a new project

varex doctor
Check system status

varex info
Show CLI information

varex version
Show current version

varex help
Show this help
    `);
  });