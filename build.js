const fs = require("fs");
const path = require("path");
const boxen = require("boxen");
const chalk = require("chalk");

const card = path.resolve(__dirname, "./dist/card");

// prettier-ignore
const content = `
${chalk.white     ("           Kazuma Ebina")} / ${chalk.white("@kazuma1989")}

${chalk.white.bold("    Work:")}  ${chalk.white("Frontend web developer at Quipper/Recruit MP")}

${chalk.white.bold("  GitHub:")}  ${chalk.gray("https://github.com/")}${chalk.green("kazuma1989")}
${chalk.white.bold("LinkedIn:")}  ${chalk.gray("https://linkedin.com/in/")}${chalk.blue("kazuma1989")}
${chalk.white.bold("   Email:")}  ${chalk.cyan("kazuma.ebina@quipper.com")}

${chalk.white.bold("    Card:")}  ${chalk.red("npx")} ${chalk.white("kazuma1989")}
`.trim();

fs.writeFileSync(
  card,
  chalk.green(
    boxen(content, {
      padding: 1,
      margin: 1,
      borderStyle: "round"
    })
  ) + "\n"
);
