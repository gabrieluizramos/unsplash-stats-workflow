const { getUserStats } = require('../client');
const { updateReadme } = require('../readme');
const { updateRepo } = require('../commit');

jest.mock('../client', () => ({
  getUserStats: jest.fn().mockResolvedValueOnce({})
}));
jest.mock('../readme', () => ({
  updateReadme: jest.fn().mockResolvedValueOnce()
}));
jest.mock('../commit', () => ({
  updateRepo: jest.fn().mockResolvedValueOnce()
}));

require('../index');

it('should fetch user data and write at readme', () => {
  expect(getUserStats).toHaveBeenCalledTimes(1);
  expect(updateReadme).toHaveBeenCalledTimes(1);
  expect(updateRepo).toHaveBeenCalledTimes(1);
});
