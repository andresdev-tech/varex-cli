import { Command } from "commander";

import { newCommand } from "./commads/new.command.js";
import { doctorCommand } from "./commads/doctor.command.js";
import { infoCommand } from "./commads/info.command.js";
import { versionCommand } from "./commads/version.command.js";
import { helpCommand } from "./commads/help.command.js";

const program = new Command();

program
    .name("varex")
    .description("Varex CLI")
    .version("1.0.0");

program.addCommand(newCommand);
program.addCommand(doctorCommand);
program.addCommand(infoCommand);
program.addCommand(versionCommand);
program.addCommand(helpCommand);

// si no hay argumentos
if (process.argv.length <= 2) {
    program.outputHelp();
    process.exit(0);
}

program.parse(process.argv);