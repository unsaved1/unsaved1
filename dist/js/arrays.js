'use strict';

//filter

// const names = ['john', 'jojo', 'alex', 'max', 'george'];

// const shortNames = names.filter((name) => {
//     return name.length > 4;
// })

// console.log(shortNames);


//map

// const answers = ['ivsan', 'JoHn', 'HEllo'].map(item => item.toLowerCase());
// console.log(answers);



// every/some

// const some = [4, 'weqwe', 'ewdftgdss'];
// console.log(some.some(item => typeof(item) === 'number'));
// console.log(some.every(item => typeof(item) === 'number'));



//reduce 

// const arr = [1, 2, 4, 3, 6, 3, 9];

// console.log(arr.reduce((sum, current) => sum + current));



// const strings = ['apple', 'cucumber', 'pineapple'];

// console.log(strings.reduce((sum, current) => `${sum}, ${current}`));


// const obj = {
//     ivan: 'person',
//     ann: 'person',
//     dog: 'animal',
//     act: 'animal' 
// };

// const newArr = Object.entries(obj)
// .filter(item => item[1] === 'person')
// .map(item => item[0]);
// console.log(newArr);


// const films = [
//     {
//         name: 'Titanic',
//         rating: 9
//     },
//     {
//         name: 'Die hard 5',
//         rating: 5
//     },
//     {
//         name: 'Matrix',
//         rating: 8
//     },
//     {
//         name: 'Some bad film',
//         rating: 4
//     }
// ];

// function showGoodFilms(arr) {
//     return arr.filter(item => {
//         if (item.rating >= 8) {
//             return item;
//         }
//     });
// }

// function showListOfFilms(arr) {
//     return arr
//     .map(item => item.name)
//     .reduce((sum, current) => `${sum}, ${current}`);
// }

// function setFilmsIds(arr) {
//     arr.map((item, i) => item.id = i);
//     return arr;
// }

// const transformedArray = setFilmsIds(films);

// function checkFilms(arr) {
//     return arr.every(item => item.id >= 0);
// }



// console.log(showGoodFilms(films));
// console.log(showListOfFilms(films));
// console.log(setFilmsIds(films))
// console.log(checkFilms(transformedArray))


const funds = [
    {amount: 1400},
    {amount: 2400},
    {amount: 1000},
    {amount: 500},
    {amount: 10400},
    {amount: 11400}
];

const getPositiveIncomeAmount = (data) => {
    return data.filter(item => item.amount > 0)
    .map(item => item.amount)
    .reduce((sum, current) => sum + current);
};

const getTotalIncomeAmount = (data) => {
    if (data.some(item => item.amount <= 0)) {
        return data.map(item => item.amount)
        .reduce((sum, current) => sum + current)
    } else {
        console.log(getPositiveIncomeAmount(funds))
    }
};

// console.log(getPositiveIncomeAmount(funds))
console.log(getTotalIncomeAmount(funds));