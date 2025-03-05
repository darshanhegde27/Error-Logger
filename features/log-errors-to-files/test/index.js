const { GlobalFileErrorHandler } = require("..");


console.log(new GlobalFileErrorHandler())


setTimeout(() => {
  Promise.reject(new Error('Unhandled rejection example'));
}, 1000);

setTimeout(() => {
  throw new Error('Uncaught exception example');
}, 2000);


setTimeout(() => {
  throw new Error('Manual exception triggered');
}, 3000);
