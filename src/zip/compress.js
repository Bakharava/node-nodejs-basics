import * as fs from 'fs';
import * as path from 'path';
import zlib from 'zlib';

const compress = async () => {
  const pathToOriginFile = path.join( 'files', 'fileToCompress.txt');
  const pathToArchivedFile = path.join( 'files', 'archive.gz');
  const input = fs.createReadStream(pathToOriginFile, 'utf-8');
  const output = fs.createWriteStream(pathToArchivedFile);
  const gzip = zlib.createGzip();

  input.pipe(gzip).pipe(output);
};

await compress();
