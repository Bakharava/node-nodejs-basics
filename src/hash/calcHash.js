import * as fs from 'fs';
import * as path from 'path';
import crypto from 'crypto';

const calculateHash = async () => {
  const pathToFile = path.join('src', 'hash', 'files', 'fileToCalculateHashFor.txt');
  await fs.readFile(pathToFile, (err, data) => {
    if (err) throw 'eeeERrr' + err;
    createHexHesh(data)
  });

  const createHexHesh = (data) => {
    const hash = crypto.createHash('sha256');
    hash.update(data)

    const hexHash = hash.digest('hex');
    console.log(hexHash);
  }
};

await calculateHash();
