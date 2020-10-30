require('./setup');

const core = require('@actions/core');

const { getUserStats } = require('./client');
const { updateReadme } = require('./readme');
const { updateRepo } = require('./commit');

getUserStats()
.then(updateReadme)
.then(updateRepo)
.catch(err => {
  core.error(err);
  core.setFailed(err.message);
});
