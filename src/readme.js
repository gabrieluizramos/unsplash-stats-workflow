const template = require('./template');
const { read, write } = require('./file');

exports.updateReadme = async (stats) => {
  const content = await read();
  const newContent = template.replaceContentByData(content, stats);
  await write(newContent);
};
