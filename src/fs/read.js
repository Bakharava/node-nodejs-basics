import * as fs from 'fs';
import * as path from 'path';

const read = async () => {
  const pathToFile = path.join('src', 'fs', 'files', 'fileToRead.txt');
  fs.access(pathToFile, fs.F_OK, (err) => {
    if (err) {
      throw Error('FS operation failed');

    } else {
      fs.readFile(pathToFile, 'utf-8', (err, content) => {
        if (err) {
          console.error('FS operation failed');
        } else {
          console.log(content);
        }
      })
    }
  });
};

await read();
