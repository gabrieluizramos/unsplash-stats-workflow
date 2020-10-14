const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson; 

const { accessKey, secretKey, username } = require('./config');

const client = new Unsplash({
  accessKey,
  secret: secretKey
});

exports.getUserSats = (user = username) => {
  return client.users.profile(user).then(toJson);
}
