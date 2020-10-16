const { default: Unsplash, toJson } = require('unsplash-js');
const { accessKey, secretKey, username } = require('./config');

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
