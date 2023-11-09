function persistence(num) {
    for (var i = 0; num > 9; i++) {
        num = num.toString().split('').reduce((a,b) => a * b);
    }
    return i;
}

// Love this kata, I finally understood the reducer function!
//     let numString = num.toString();
//     let split = numString.split('');
//     if (numString.length == 1) return 0;

//     let getFirstValue = true;
//     let result = 1;
//     let tempResult = 0;
//     let count = 1;

//     if (getFirstValue) {
//         for (let i = 0; i < split.length; i++) {
//             result *= parseInt(split[i]);
//         }
//         getFirstValue = false;
//     }
//     while(true) {
//         if (result.toString().length > 1 ) {
//             tempResult = result.toString().split('');
//             result = 1;
//             count++;
//                 for (let i = 0; i < tempResult.length; i++) {
//                     result *= parseInt(tempResult[i]);
//                 }
//         } else break;
//     }
//     return count;

//https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec