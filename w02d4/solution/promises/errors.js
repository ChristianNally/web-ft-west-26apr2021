const functions = require('./promise-generator');

const returnPromise = functions.returnPromise;
const returnRejectedPromise = functions.returnRejectedPromise;
const returnRandomPromise = functions.returnRandomPromise;

// throw new Error('ooooops');

returnRandomPromise('one')
  .then((data) => {
    console.log(data);
    return returnRandomPromise('two');
  })
  .then((data) => {
    console.log(data);
    return returnRandomPromise('three');
  })
  .then((data) => {
    console.log(data);
    return returnRandomPromise('four');
  })
  .then((data) => {
    console.log(data);
    return returnRandomPromise('five');
  })
  .then((data) => {
    console.log(data);
    return returnRandomPromise('six');
  })
  .catch((err) => {
    // throw err;
    console.log('err:',err);
  });
