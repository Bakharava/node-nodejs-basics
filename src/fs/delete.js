import * as fs from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  const pathToFile = join(__dirname, 'files', 'fresh.txt');
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
