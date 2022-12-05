import process from 'process';

const parseArgs = () => {
  const prefix = '--'
  const argList = [];
  process.argv.length && process.argv.forEach((arg, index) => {

    if (arg.includes(prefix)) {
      const argParam = arg.substr(2);
      argList.push(`${argParam} is ${process.argv[index + 1]}`)
    }
  })
  const output = argList.join(', ')
  console.log(output)
};

parseArgs();
