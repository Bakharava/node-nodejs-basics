import * as fs from 'fs';
import * as path from 'path';
import process from 'process';

const read = async () => {
  const pathToFile = path.join('src', 'streams', 'files', 'fileToRead.txt');
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
