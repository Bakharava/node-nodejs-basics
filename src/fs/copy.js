import * as fs from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
  const pathToOriginFolder = join(__dirname, 'files');
  const pathToTargetFolder = join(__dirname,'files_copy');
  console.log('1111', pathToTargetFolder)
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
        fs.mkdir(join(pathToTargetFolder), err => {
          if (err) throw err;
          console.log('Folder is created');
        });
        files.forEach(file => {
          const pathToOriginFile = join(pathToOriginFolder, file)
          const pathToTargetFile = join(pathToTargetFolder, file)
          fs.copyFile(pathToOriginFile, pathToTargetFile, (err) => {
            if (err) throw err;
          })
        })
      }
    })
  }
};

copy();
