const { updateReadme } = require('../readme');
const { read, write } = require('../file');

const template = require('../template');

const spy = jest.spyOn(template, 'replaceContentByData');

jest.mock('../file.js', () => ({
  read: jest.fn().mockResolvedValue(''),
  write: jest.fn().mockResolvedValue('')
}));

const stats = {
  downloads: 123,
  views: 321
};

it('should update readme with new stats', async () => {
  await updateReadme(stats);

  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenCalledWith('', stats);

  expect(read).toHaveBeenCalledTimes(1);
  expect(write).toHaveBeenCalledTimes(1);
});
