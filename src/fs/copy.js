import * as fs from 'fs';
import * as path from 'path';

const copy = async () => {
  const pathToOriginFolder = path.join('files');
  const pathToTargetFolder = path.join('files_copy');
  fs.access(pathToTargetFolder, fs.F_OK, (err) => {
    if (err) {
      copyFiles();
    } else {
      throw new Error('FS operation failed');
    }
  });

  const copyFiles = () => {
    fs.readdir(pathToOriginFolder, async (err, files) => {
      if (err) {
        throw new Error('FS operation failed');
      } else {
        await fs.mkdir(path.join(pathToTargetFolder), err => {
          err && throw Error(err);
          console.log('Folder is created');
        });
        files.forEach(file => {
          const pathToOriginFile = path.join(pathToOriginFolder, file)
          const pathToTargetFile = path.join(pathToTargetFolder, file)
          fs.copyFile(pathToOriginFile, pathToTargetFile, (err) => {
            err && throw Error(err);
          })
        })
      }
    })
  }
};

copy();
