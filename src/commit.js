const core = require('@actions/core');
const simpleGit = require('simple-git');

const options = {
  baseDir: process.cwd(),
  binary: 'git',
  maxConcurrentProcesses: 6,
};

const gitClient = simpleGit(options);

const {
  committerUser,
  committerEmail,
  commitMessage,
  // githubToken,
  // repository,
  README_PATH
} = require('./config');

exports.updateRepo = async () => {
  console.log('branch is', core.getInput('branch'));
  const git = await gitClient.init();
  await git
    .addConfig('user.email', committerEmail)
    .addConfig('user.name', committerUser)
    .fetch()
    .pull()
    .add(README_PATH)
    .commit(commitMessage)
    .push()
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
};
