import * as fs from 'fs';
import * as path from 'path';
import zlib from 'zlib';

const decompress = async () => {
  const pathToOriginFile = path.resolve( 'files', 'fileToCompress.txt');
  const pathArchivedFile = path.resolve( 'files', 'archive.gz');
  const input = fs.createReadStream(pathArchivedFile);
  const output = fs.createWriteStream(pathToOriginFile);
  const gzip = zlib.createUnzip();

  input.pipe(gzip).pipe(output);
};

await decompress();
