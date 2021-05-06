console.log('start of main thread.');

const promiseGenerator = require('./promise-generator');
const promise = promiseGenerator.returnPromise('first promise', 4444);

// console.log(promise);


// Not the best way to do this

// setTimeout(()=>{
//   console.log(promise);
// },5000);

//
// The RIGHT way to do this
//

promise
  .then((data) => {
    console.log('data:',data);
    return 'another thing';
  })
  .then((data2) => {
    console.log("monkeyfuzz:",data2);
  });

console.log('end of main thread.');
