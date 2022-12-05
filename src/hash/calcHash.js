import * as fs from 'fs';
import crypto from 'crypto';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
  const pathToFile = join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  fs.readFile(pathToFile, (err, data) => {
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
