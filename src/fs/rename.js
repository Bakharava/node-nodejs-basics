import * as fs from 'fs';
import * as path from 'path';

const rename = async () => {
  const pathToWrongFile = path.join('files', 'wrongFilename.txt');
  const pathToProperFile = path.join('files', 'properFilename.md');

  fs.access(pathToProperFile, fs.F_OK, (err) => {
    if (err) {
      fs.access(pathToWrongFile, (err) => {
        if (err) {
          throw new Error('FS operation failed');
        } else {
          fs.rename(pathToWrongFile, pathToProperFile, err => {
            if (err) throw err;
          })
        }
      })
    } else {
      throw new Error('FS operation failed');
    }
  })
};

await rename();
