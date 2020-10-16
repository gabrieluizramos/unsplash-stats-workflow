const core = require('@actions/core');

const env = process.env.NODE_ENV;

const config = {
  test: {
    username: 'username',
    accessKey: 'accessKey',
    secretKey: 'secretKey',
    README_PATH: './ANY.md',
    template: 'list',
    githubToken: 'any-token',
    committerUser: 'unsplash-stats-bot',
    commiterEmail: 'unsplash-stats@bot.com',
    commitMessage: 'Updated with latest Unsplash Stats',
    repository: process.env.GITHUB_REPOSITORY
  },
  development: {
    username: process.env.UNSPLASH_USERNAME,
    accessKey: process.env.UNSPLASH_ACCESS_KEY,
    secretKey: process.env.UNSPLASH_SECRET_KEY,
    README_PATH: './README.test.list.md',
    template: 'list',
    githubToken: 'any-token',
    committerUser: 'unsplash-stats-bot',
    commiterEmail: 'unsplash-stat-bots@example.com',
    commitMessage: 'Updated with latest Unsplash Stats',
    repository: process.env.GITHUB_REPOSITORY
  },
  default: {
    username: core.getInput('username'),
    accessKey: core.getInput('ACCESS_KEY'),
    secretKey: core.getInput('SECRET_KEY'),
    README_PATH: core.getInput('file'),
    template: core.getInput('template'),
    githubToken: core.getInput('github_token'),
    committerUser: core.getInput('committer_user'),
    committerEmail: core.getInput('commiter_email'),
    commitMessage: core.getInput('commit_message'),
    repository: process.env.GITHUB_REPOSITORY
  }
};

module.exports = config[env || 'default'];
