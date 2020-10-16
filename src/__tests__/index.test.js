const { getUserStats } = require('../client');
const { updateReadme } = require('../readme');

jest.mock('../client');
jest.mock('../readme');

require('../index');

it('should fetch user data and write at readme', () => {
  expect(getUserStats).toHaveBeenCalledTimes(1);
  expect(updateReadme).toHaveBeenCalledTimes(1);
});
