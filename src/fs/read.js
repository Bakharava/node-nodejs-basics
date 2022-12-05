import * as fs from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const pathToFile = join(__dirname, 'files', 'fileToRead.txt');
  fs.access(pathToFile, fs.F_OK, (err) => {
    if (err) {
      throw new Error('FS operation failed');

    } else {
      fs.readFile(pathToFile, 'utf-8', (err, content) => {
        if (err) {
          throw new Error('FS operation failed');
        } else {
          console.log(content);
        }
      })
    }
  });
};

await read();
