import * as fs from 'fs';
import * as path from 'path';
import process from 'process';

const write = async () => {
  const pathToFile = path.join('src', 'streams', 'files', 'fileToWrite.txt');
    let input = process.stdin;
    const output = fs.createWriteStream(pathToFile);
  input.on('data', (data) => output.write(data));
  input.on('error', error => console.log('Error', error.message));
};

await write();
