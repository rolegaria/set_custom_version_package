const core = require("@actions/core");

try {
  const current_version = core.getInput("current-version");
  const level_of_change = core.getInput("level-of-change");
  const increment = 1;

  let version = current_version.split(".");

  if (level_of_change == "patch")
    version[2] = parseInt(version[2]) + increment;
  else if (level_of_change == "minor")
    version[1] = parseInt(version[1]) + increment;
  else if (level_of_change == "major") 
    version[0] = parseInt(version[0]) + increment;
  else if (level_of_change == "new")
    version[0] = parseInt(version[0]) + increment;
  else 
    core.setFailed("Invalid level of change");

  let next_version = version.join(".");
  core.setOutput("next-version", next_version);
} catch (error) {
  core.setFailed(error.message);
}
