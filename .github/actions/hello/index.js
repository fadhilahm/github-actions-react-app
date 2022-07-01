const core = require("@actions/core");
const github = require("@actions/github");

try {
  // throw new Error("Some error");

  core.debug("debug message.");
  core.warning("warning message.");
  core.error("error message");

  const whoToGreet = core.getInput("who-to-greet");
  core.setSecret(whoToGreet);
  console.log(`Hello Happy ${whoToGreet}! |  ハローハッピー${whoToGreet}!`);

  const currentTime = new Date();
  core.setOutput("time", currentTime.toString());

  core.startGroup("super duper long github object:");
  console.log(JSON.stringify(github, null, `\t`));
  core.endGroup();

  core.exportVariable("HELLO", "ハロー");
} catch (error) {
  core.setFailed(error.message);
}
