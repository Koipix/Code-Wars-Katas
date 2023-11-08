function squareSum(numbers){
    let squareSum = 0;
   for (let i = 0; i < numbers.length; i++) {
     squareSum += numbers[i] * numbers[i];
   }
    return squareSum;
  }

//https://www.codewars.com/kata/515e271a311df0350d00000f