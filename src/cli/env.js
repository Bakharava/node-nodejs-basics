import process from 'process';

const parseEnv = () => {
  const prefix = 'RSS_';
  let envVarList = [];

  if (Object.keys(process.env).length) {
    for (let key in process.env) {
      if (key.includes(prefix)) {
        envVarList.push(`${key} is ${process.env[key]}`)
      }
    }
    const output = envVarList.join('; ');
    console.log(output)
  }
};

parseEnv();
