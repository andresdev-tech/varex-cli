import { execSync } from "node:child_process";

export class YarnInstaller {
  install(): void {
    execSync("yarn", {
      stdio: "inherit",
    });
  }
}