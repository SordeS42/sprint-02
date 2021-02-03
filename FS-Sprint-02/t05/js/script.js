'use strict'

let total = (addCount, addPrice, currentTotal = 0) => {
    return (addCount * addPrice) + currentTotal
    let result = (addCount * addPrice) + currentTotal;
    return result.toFixed(2)
}

  
// 'use strict'

// let total = (addCount, addPrice, currentTotal = 0) => {
//     let result = (addCount * addPrice) + currentTotal;
//     return result.toFixed(2)
// }

// // test
let sum = total(2, 5);
sum = total(1, 0.7, sum);
sum = total(1, 0.78, sum);
console.log(sum); // will return 1.08