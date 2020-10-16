const simpleGit = require('simple-git');

const { default: Unsplash, toJson } = require('unsplash-js');

const { accessKey, secretKey, username } = require('./config');

// Unsplash
const unsplashClient = new Unsplash({
  accessKey,
  secret: secretKey
});

exports.getUserStats = ({ user = username, client = unsplashClient } = {}) =>
  client.users
    .statistics(user)
    .then(toJson)
    .then((stats) => ({
      downloads: stats.downloads.total,
      views: stats.views.total
    }));


// Git

const options = {
  baseDir: process.cwd(),
  binary: 'git',
  maxConcurrentProcesses: 6,
};

exports.git = simpleGit(options);
