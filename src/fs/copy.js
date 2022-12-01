import * as fs from 'fs';
import * as path from 'path';

const copy = async () => {
  const pathToOriginFolder = path.join('src', 'fs', 'files');
  const pathToTargetFolder = path.join('src', 'fs', 'files_copy');
  fs.access(pathToTargetFolder, fs.F_OK, (err) => {
    if (err) {
      copyFiles();
    } else {
      throw Error('FS operation failed');
    }
  });

  const copyFiles = () => {
    fs.readdir(pathToOriginFolder, async (err, files) => {
      if (err) {
        console.error('FS operation failed');
      } else {
        await fs.mkdir(path.join(pathToTargetFolder), err => {
          if (err) throw err;
          console.log('Folder is created');
        });
        files.forEach(file => {
          const pathToOriginFile = path.join(pathToOriginFolder, file)
          const pathToTargetFile = path.join(pathToTargetFolder, file)
          fs.copyFile(pathToOriginFile, pathToTargetFile, (err) => {
            console.error(err)
          })
        })
      }
    })
  }
};

copy();
