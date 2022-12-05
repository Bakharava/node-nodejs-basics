import * as fs from 'fs';
import * as path from 'path';

const create = async () => {
  const pathToFile = path.join('files', 'fresh.txt');
    fs.access(pathToFile, fs.F_OK, (err) => {
      if (err) {
        fs.appendFile(pathToFile, 'I am fresh and young', (err) => {
          if (err) throw err;
          console.log('File was added!');
        })
      } else {
        throw new Error('FS operation failed');
      }
    })
};

await create();
