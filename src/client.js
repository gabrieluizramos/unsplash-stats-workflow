const { default: Unsplash, toJson } = require('unsplash-js');
const { accessKey, secretKey, username } = require('./config');

const client = new Unsplash({
  accessKey,
  secret: secretKey
});

exports.getUserSats = (user = username) =>
  client.users
    .statistics(user)
    .then(toJson)
    .then((stats) => ({
      downloads: stats.downloads.total,
      views: stats.views.total
    }));
