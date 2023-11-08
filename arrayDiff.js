function arrayDiff(a, b) {
    let newArr = [];

    for (let i = 0; i < a.length; i++) {
        let test = false;
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                test = true;
                break;
            }
        }
        if (!test) {
            newArr.push(a[i]);
        }
    }
    return newArr;
}

console.log(arrayDiff([1,2,3,4,5], [2]));     // => [1,3,4,5]
console.log(arrayDiff([1,2,3,4,5], [1,2]));  // => [3,4,5]