import { execSync } from "node:child_process";

export class BunInstaller {
  install(): void {
    execSync("bun install", {
      stdio: "inherit",
    });
  }
}