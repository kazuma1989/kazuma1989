const fs = require("fs");
const path = require("path");
const boxen = require("boxen");
const chalk = require("chalk");

const card = path.resolve(__dirname, "./dist/card");

const text = chalk.white;
const label = chalk.white.bold;
const mute = chalk.gray;

// prettier-ignore
const content = `
${text ("           Kazuma Ebina")} / ${text("@kazuma1989")}

${label("    Work:")}  ${text("Frontend web developer at Quipper/Recruit MP")}

${label("  GitHub:")}  ${mute("https://github.com/")}${chalk.green("kazuma1989")}
${label("LinkedIn:")}  ${mute("https://linkedin.com/in/")}${chalk.blue("kazuma1989")}
${label("   Email:")}  ${chalk.cyan("kazuma.ebina@quipper.com")}

${label("    Card:")}  ${chalk.red("npx")} ${text("kazuma1989")}
`.trim();

fs.writeFileSync(
  card,
  chalk.blue(
    boxen(content, {
      padding: 1,
      margin: 1,
      borderStyle: "round"
    })
  ) + "\n"
);
