const core = require('@actions/core');

module.exports = {
    username: core.getInput('username'),
    accessKey: core.getInput('ACCESS_KEY'),
    secretKey: core.getInput('SECRET_KEY'),
}