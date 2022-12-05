import * as fs from 'fs';
import * as path from 'path';

const remove = async () => {
  const pathToFile = path.join('files', 'fileToRemove.txt');
  fs.access(pathToFile, fs.F_OK, (err) => {
    if (err) {
      throw new Error('FS operation failed');
    } else {
      fs.unlink(pathToFile, (err) => {
        if (err) throw err;
        console.log('File was removed!');
      })
    }
  })
};

await remove();
