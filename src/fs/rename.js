import * as fs from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  const pathToWrongFile = join(__dirname, 'files', 'wrongFilename.txt');
  const pathToProperFile = join(__dirname, 'files', 'properFilename.md');

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
