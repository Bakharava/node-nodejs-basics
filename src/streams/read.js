import * as fs from 'fs';
import process from 'process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const pathToFile = join(__dirname, 'files', 'fileToRead.txt');
  const stream = fs.createReadStream(pathToFile, 'utf-8');
  let data = '';

  stream.on('error', (err) => {
    throw new Error(`Cannot read file ${pathToFile}. Error: ${err.message}`)
  });

  stream.on('data', (chunk) => {
    data += chunk
  })

  stream.on('end', () =>  process.stdout.write(data));
};

await read();
