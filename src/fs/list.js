import * as fs from 'fs';
import * as path from 'path';

const list = async () => {
  const pathToFolder = path.join('src', 'fs', 'files');

  fs.access(pathToFolder, fs.F_OK, (err) => {
    if (err) {
      throw Error('FS operation failed');

    } else {
      fs.readdir(pathToFolder, (err, files) => {
        if (err) {
          console.error('FS operation failed');
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
