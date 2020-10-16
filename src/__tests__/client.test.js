const unsplash = require('unsplash-js');
const { getUserStats } = require('../client');

const { accessKey, secretKey, username } = require('../config');

jest.mock('unsplash-js');
unsplash.toJson.mockImplementation((data) => data);

it('should create a client instance', () => {
  expect(unsplash.default).toHaveBeenCalledWith({
    accessKey,
    secret: secretKey
  });
});

it('should fetch user stats', async () => {
  const payload = {
    downloads: {
      total: 123
    },
    views: {
      total: 1234
    }
  };

  const client = {
    users: {
      statistics: jest.fn().mockResolvedValueOnce(payload)
    }
  };

  const data = await getUserStats({ client });

  expect(client.users.statistics).toHaveBeenCalledTimes(1);
  expect(client.users.statistics).toHaveBeenCalledWith(username);
  expect(data).toEqual({
    downloads: payload.downloads.total,
    views: payload.views.total
  });
});
