import * as fs from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
  const pathToFolder = join(__dirname, 'files');

  fs.access(pathToFolder, fs.F_OK, (err) => {
    if (err) {
      throw new Error('FS operation failed');

    } else {
      fs.readdir(pathToFolder, (err, files) => {
        if (err) {
          throw new Error('FS operation failed');
        } else {
          const listOfFiles =[];
          files.forEach(file => {
            listOfFiles.push(file)
          });
          console.log(listOfFiles);
        }
      })
    }
  });
};

await list();
