import process from 'process';

const parseArgs = () => {
  const prefix = '--'
  process.argv.length && process.argv.forEach((arg, index) => {
    if (arg.includes(prefix)) {
      console.log(`${arg} is ${process.argv[index + 1]}`)
    }
  })
};

parseArgs();
