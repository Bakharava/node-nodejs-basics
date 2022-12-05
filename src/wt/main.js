import { Worker } from 'worker_threads';
import os from 'os';

const performCalculations = async () => {
  const resultsOfWorker = [];

  const runWorker = (num) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker('./worker.js', { workerData: {num} });
      worker.on('message', (message) => {
        resolve(message)
      });
      worker.on('error', reject);
      worker.on('exit', (code) => {
        if (code !== 0) {
          reject(new Error(`Worker stopped with exit code ${code}`));
        }

      })
    })
  }

  const getCoresQuantity = () => {
    return os.cpus().length;
  }
  const startNum = 10;
  const listOfWorkers = [];

  for(let i = 0; i < getCoresQuantity(); i++) {
    listOfWorkers.push(runWorker(startNum + i));
  }

  Promise.all(listOfWorkers)
    .then((data) => {
      data.forEach(item => {
        resultsOfWorker.push({
          status: 'resolved',
          item
        });
      })

  })
    .catch((err)=> {
      resultsOfWorker.push({
        status: 'error',
        data: null
      });
    })
    .finally(() => {
      console.log(resultsOfWorker);
    });
};

await performCalculations();
