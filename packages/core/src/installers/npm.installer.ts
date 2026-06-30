import { execSync } from "node:child_process";

export class NpmInstaller {
  install(): void {
    execSync("npm install", {
      stdio: "inherit",
    });
  }
}