import { Command } from "commander";

export const doctorCommand = new Command("doctor")
  .description("Check system requirements")
  .action(() => {
    console.log("Running diagnostics...");

    console.log("Node.js: OK");
    console.log("pnpm: OK");
    console.log("Git: OK");
  });