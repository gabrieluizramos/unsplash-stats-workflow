const { promises } = require('fs');
const { read, write } = require('../file');

const { README_PATH } = require('../config');

jest.mock('fs', () => ({
  promises: {
    readFile: jest.fn(),
    writeFile: jest.fn(),
  }
}))

it('should readFile by given path', async () => {
  promises.readFile.mockResolvedValueOnce('');
  await read();

  expect(promises.readFile).toHaveBeenCalledTimes(1);
  expect(promises.readFile).toHaveBeenCalledWith(README_PATH);

  promises.readFile.mockResolvedValueOnce('');
  const newPath = 'new.md';
  await read(newPath);

  expect(promises.readFile).toHaveBeenCalledTimes(2);
  expect(promises.readFile).toHaveBeenCalledWith(newPath);
});

it('should writeFile by given data and path', async () => {
  const data = 'any-data';

  promises.writeFile.mockResolvedValueOnce('');
  await write(data);

  expect(promises.writeFile).toHaveBeenCalledTimes(1);
  expect(promises.writeFile).toHaveBeenCalledWith(README_PATH, data);

  promises.writeFile.mockResolvedValueOnce('');
  const newPath = 'new.md';
  await write(data, newPath);

  expect(promises.writeFile).toHaveBeenCalledTimes(2);
  expect(promises.writeFile).toHaveBeenCalledWith(newPath, data);
});
