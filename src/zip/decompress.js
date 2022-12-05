import * as fs from 'fs';
import zlib from 'zlib';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
  const pathToOriginFile = join(__dirname, 'files', 'fileToCompress.txt');
  const pathArchivedFile = join(__dirname, 'files', 'archive.gz');
  const input = fs.createReadStream(pathArchivedFile);
  const output = fs.createWriteStream(pathToOriginFile);
  const gzip = zlib.createUnzip();

  input.pipe(gzip).pipe(output);
};

await decompress();
