function isIsogram(str){
    if (str == '') return true;
    let lowCase = str.toLowerCase().split('');
      
    for (let i = 0; i < lowCase.length; i++) {
      if (lowCase.slice(i+1).includes(lowCase[i])) {
          return false;
      }
    }
    return true;
  }

//https://www.codewars.com/kata/54ba84be607a92aa900000f1