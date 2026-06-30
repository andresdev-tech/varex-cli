import { Command } from "commander";

export const versionCommand = new Command("version")
  .description("Show CLI version")
  .action(() => {
    console.log("v1.0.0");
  });