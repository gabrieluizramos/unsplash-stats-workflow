const simpleGit = require('simple-git');

const options = {
  baseDir: process.cwd(),
  binary: 'git',
  maxConcurrentProcesses: 6,
};

const git = simpleGit(options);

const {
  committerUser,
  committerEmail,
  commitMessage,
  // githubToken,
  // repository,
  README_PATH
} = require('./config');

exports.updateRepo = async () => {
  await git.addConfig('user.email', committerEmail)
  await git.addConfig('user.name', committerUser)
  await git.fetch()
  await git.pull()
  await git.add(README_PATH)
  await git.commit(commitMessage)
  await git.push()
};
