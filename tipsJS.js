const fs = require('fs').promises;

const readFile = async (path) => {
  try {
    const file = await fs.readFile(path, 'utf8');
    console.log(file);
  } catch (error) {
    console.error(error);
  }
};

const writeFile = async (path, data) => {
  try {
    await fs.writeFile(path, data);
  } catch (error) {
    console.error(error);
  }
};

const deleteFile = async (path) => {
  try {
    await fs.unlink(path);
  } catch (error) {
    console.error(error);
  }
};
