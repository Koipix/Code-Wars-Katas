function high(x) {
    let newArr = x.split(' ');
    let score = 0;
    let result = '';

    for (let i = 0; i < newArr.length; i++) {
        const subArray = newArr[i];
        let tempScore = 0;

        for (let j = 0; j < subArray.length; j++) {
            tempScore += subArray[j].charCodeAt() - 96;
        }

        if (tempScore > score) {
            score = tempScore;
            result = newArr[i]
        }
    } 
    return result;
}

high("man i need a taxi up to ubud");
