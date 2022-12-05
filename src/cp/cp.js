import process from 'process';
import child_process from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let input = process.stdin;
const spawnChildProcess = async (args) => {

  const chiled = child_process.spawn('node', [join(__dirname, 'files', 'script.js'), args])
  chiled.stdout.pipe(process.stdout)
  input.on('data', (data) => {
    chiled.stdin.write(data)
  });
};

spawnChildProcess(process.argv);
