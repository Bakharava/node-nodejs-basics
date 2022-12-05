import * as fs from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  const pathToFile = join(__dirname, 'files', 'fresh.txt');
  console.log(pathToFile)
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
