import process from 'process';
import { Transform } from 'stream';

const transform = async () => {
  let input = process.stdin;
  let output = process.stdout;

  const transformedData = new Transform({
    transform(chunk, encoding, cb) {
      cb(null, chunk.toString().split('').reverse().join(''));
    }
  })
  input.pipe(transformedData).pipe(output)
};

await transform();
