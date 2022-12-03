import process from 'process';

const parseEnv = () => {
  const prefix = 'RSS_'
  process.argv.length && process.argv.forEach((arg) => {
      if (arg.includes(prefix)) {
        console.log(arg)
      }
    })
};

parseEnv();
