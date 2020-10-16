const {
  // committerUser,
  // committerEmail,
  // commitMessage,
  // githubToken,
  repository,
  // README_PATH
} = require('./config');

exports.updateRepo = async () => {
  // await exec('git', ['config', '--global', 'user.email', committerEmail]);
  // if (githubToken) {
  //   await exec('git', [
  //     'remote',
  //     'set-url',
  //     'origin',
  //     `https://${githubToken}@github.com/${repository}.git`
  //   ]);
  // }
  // await exec('git', ['config', '--global', 'user.name', committerUser]);
  // await exec('git', ['add', README_PATH]);
  // await exec('git', ['commit', '-m', commitMessage]);
  // await exec('git', ['push']);
  console.log(repository);
};
