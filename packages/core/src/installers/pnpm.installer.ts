import { execSync } from "node:child_process";

export class PnpmInstaller {
  install(): void {
    execSync("pnpm install", {
      stdio: "inherit",
    });
  }
}