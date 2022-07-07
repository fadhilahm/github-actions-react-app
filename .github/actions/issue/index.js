const core = require("@actions/core");
const github = require("@actions/github");

const main = async () => {
  try {
    const token = core.getInput("token");
    const title = core.getInput("title");
    const body = core.getInput("body");
    const assignees = core.getInput("assignees");

    const octokit = github.getOctokit(token)

    core.startGroup('octokit object');
    console.log(JSON.stringify(octokit))
    core.endGroup()

    const response = await octokit.issues.create({
      ...github.context.repo,
      title,
      body,
      assignees: assignees ? assignees.split("\n") : undefined,
    });

    core.setOutput("issue", JSON.stringify(response));
  } catch (e) {
    core.setFailed(e.message);
  }
};

main();
