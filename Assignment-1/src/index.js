const fs = require('fs/promises');

const myFileWriter = async (fileName, fileContent) => {
  try {
    await fs.writeFile(fileName, fileContent);
  } catch (err) {
    console.error(err);
  }
};

const myFileReader = async (fileName) => {
  try {
    const fileContent = await fs.readFile(fileName, 'utf8');
    return fileContent;
  } catch (err) {
    console.error(err);
  }
};

const myFileUpdater = async (fileName, fileContent) => {
  try {
    await fs.truncate(fileName, 0);
    await fs.writeFile(fileName, fileContent);
  } catch (err) {
    console.error(err);
  }
};

const myFileDeleter = async (fileName) => {
  try {
    await fs.unlink(fileName);
  } catch (err) {
    console.error(err);
  }
};

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };
