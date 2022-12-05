import * as fs from 'fs';
import process from 'process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
  const pathToFile = path.join(__dirname, 'files', 'fileToWrite.txt');
    let input = process.stdin;
    const output = fs.createWriteStream(pathToFile);
  input.on('data', (data) => output.write(data));
  input.on('error', error => console.log('Error', error.message));
};

await write();
