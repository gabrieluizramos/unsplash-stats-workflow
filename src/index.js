require('./setup');

const core = require('@actions/core');

// const { getUserStats } = require('./client');
// const { updateReadme } = require('./readme');
const { updateRepo } = require('./commit');

(async () => {
  try {
    // const stats = await getUserStats();
    // await updateReadme(stats);
    await updateRepo();
  } catch (err) {
    core.setFailed(err.message);
  }
})();
