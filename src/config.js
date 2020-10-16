const core = require('@actions/core');

const env = process.env.NODE_ENV;

const config = {
  test: {
    username: 'username',
    accessKey: 'accessKey',
    secretKey: 'secretKey',
    README_PATH: './ANY.md',
    template: 'list'
  },
  development: {
    username: process.env.UNSPLASH_USERNAME,
    accessKey: process.env.UNSPLASH_ACCESS_KEY,
    secretKey: process.env.UNSPLASH_SECRET_KEY,
    README_PATH: './README.test.md',
    template: 'list'
  },
  default: {
    username: core.getInput('username'),
    accessKey: core.getInput('ACCESS_KEY'),
    secretKey: core.getInput('SECRET_KEY'),
    README_PATH: core.getInput('file'),
    template: core.getInput('template')
  }
};

module.exports = config[env || 'default'];
