function getDivisorsCnt(n) {

    let result = 2; 

    if (n === 1) return 1;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if (i * i === n) {
                result++;
            } else { 
                result += 2;
            }
        }
    }
    return result;
}
