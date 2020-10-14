const core = require('@actions/core');

module.exports = {
    username: core.getInput('username'),
    accessKey: process.env.ACCESS_KEY,
    secretKey: process.env.SECRET_KEY,
}