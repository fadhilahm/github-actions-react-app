const { getInput, setFailed, setOutput } = require("@actions/core");
const github = require("@actions/github");

try {
  const whoToGreet = getInput("who-to-greet");
  console.log(`Hello Happy ${whoToGreet}! |  ハローハッピー${whoToGreet}!`);

  const currentTime = new Date();
  setOutput("time", currentTime.toString());

  console.log(JSON.stringify(github, null, `\t`));
} catch (error) {
  setFailed(error.message);
}
