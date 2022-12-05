import * as fs from 'fs';
import zlib from 'zlib';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
  const pathToOriginFile = join(__dirname, 'files', 'fileToCompress.txt');
  const pathToArchivedFile = join(__dirname, 'files', 'archive.gz');
  const input = fs.createReadStream(pathToOriginFile, 'utf-8');
  const output = fs.createWriteStream(pathToArchivedFile);
  const gzip = zlib.createGzip();

  input.pipe(gzip).pipe(output);
};

await compress();
