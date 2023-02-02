const core = require("@actions/core");

try {
  const current_version = core.getInput("current-version");
  const level_of_change = core.getInput("level-of-change");

  let version = current_version.split(".");

  if (level_of_change == "patch")
    version[2] += 1;
  else if (level_of_change == "minor")
    version[1] +=1;
  else if (level_of_change == "major")
    version[0] +=1;
  else 
    core.setFailed("Invalid level of change");

  let next_version = version.join(".");
  core.setOutput("next-version", next_version);
} catch (error) {
  core.setFailed(error.message);
}
