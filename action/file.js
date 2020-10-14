const core = require('@actions/core');

exports.updateReadme = (stats) => {
    console.log(`========== Your stats ==========`)
    core.setOutput("stats", stats);
}