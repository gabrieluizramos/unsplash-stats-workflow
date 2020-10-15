const { promises } = require('fs');
const { README_PATH } = require('./config');


const { readFile, writeFile } = promises;

const read = async (path = README_PATH) => {
    const file = await readFile(path);
    return file.toString();
}

const write = async (data, path = README_PATH) => {
    await writeFile(path, data);
}

module.exports = {
    read,
    write
}