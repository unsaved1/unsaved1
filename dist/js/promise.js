'use strict';

// const num = 2;

// console.log('запрос данных...')

// const req = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('подготовка данных...');

//         const product = {
//             name: 'TV',
//             price: 2000
//         };

//         resolve(product);

//     }, 2000)
// }); 

// req.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.status = 'order';
//             resolve(data);
//         }, 2000)
//     }) 
// }).then(data => {
//     data.price = 3222;
//     console.log('sync')
//     return (data);
// }).then(data => {
//     console.log(data);
// }).catch(() => {
//     console.log('error');
// }).finally(() => {
//     console.log('finally')
// })

// const test = time => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), time)
//     })
// };

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));


// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('all');
// })
// Promise.race([test(1000), test(2000)]).then(() => {
//     console.log('all');
// })


// function delay(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, ms);
//     });

// }
  
//   delay(3000).then(() => alert('выполнилось через 3 секунды'));

