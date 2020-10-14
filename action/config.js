const core = require('@actions/core');

const isDevelopment = process.env.NODE_ENV === 'development';

const config = {
    development: {
        username: process.env.UNSPLASH_USERNAME,
        accessKey: process.env.UNSPLASH_ACCESS_KEY,
        secretKey: process.env.UNSPLASH_SECRET_KEY,
    },
    default: {
        username: core.getInput('username'),
        accessKey: core.getInput('ACCESS_KEY'),
        secretKey: core.getInput('SECRET_KEY'),
    }
};

module.exports = isDevelopment ? config.development : config.default;