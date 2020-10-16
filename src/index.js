require('./setup');

const core = require('@actions/core');

const { getUserStats } = require('./client');
const { updateReadme } = require('./readme');

(async () => {
  try {
    const stats = await getUserStats();
    updateReadme(stats);
  } catch (err) {
    core.setFailed(err.message);
  }
})();
