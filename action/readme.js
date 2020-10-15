const core = require('@actions/core');

const { replaceContentByData } = require('./template');
const { read, write } = require('./file');

exports.updateReadme = async (stats) => {
    const content = await read();
    const newContent = replaceContentByData(content, stats);
    
    console.log('=== NEW CONTENT ===');
    console.log(newContent);
}