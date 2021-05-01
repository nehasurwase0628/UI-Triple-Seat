// In js promise is an one object that you hope to receive in the future.
// Promise has 3 states

//1. Pending

//2. Fullfiled

//3. Rejected

// let flag = false;

// let decision = new Promise(function(resolve, reject) {
//     if (flag) {
//         resolve("Complted")
//     } else {
//         reject("Not Completed")
//     }
// })
// console.log(decision)

// let flag = true;

// let decision = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     if (flag) { // if(flag === true)
//       resolve("Complted");
//     } else {
//       reject("Not Completed");
//     }
//   }, 3000);
// });
// console.log(decision);

// console.log(1);

// setTimeout(() => {
//     console.log(2)
// }, 3000);

// console.log(3);

// Promise.then(onFulfiled, onReject)

function makePromise(completed) {
    console.log(1)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (completed) {
        resolve("Completd, 2");
      } else {
        reject("Not Completed");
      }
    }, 3000);

    // console.log("3")
  });
}

var decision = makePromise(true);
console.log(decision)

decision.then((success) => {
    console.log(success);
    console.log(3);
}, reason => console.log(reason))

// decision.then(
//   undefined,
//   (reason) => console.log(reason)
// );
