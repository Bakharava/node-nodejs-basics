import * as fs from 'fs';
import * as path from 'path';

const rename = async () => {
  const pathToWrongFile = path.join('src', 'fs', 'files', 'wrongFilename.txt');
  const pathToProperFile = path.join('src', 'fs', 'files', 'properFilename.md');

  fs.access(pathToProperFile, fs.F_OK, (err) => {
    if (err) {
      fs.access(pathToWrongFile, (err) => {
        if (err) {
          throw Error('FS operation failed');
        } else {
          fs.rename(pathToWrongFile, pathToProperFile, err => {
            if (err) throw err;
          })
        }
      })
    } else {
      throw Error('FS operation failed');
    }
  })
};

await rename();
