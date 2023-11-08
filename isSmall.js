function smallEnough(a, limit){
    let check = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] <= limit) {
        check++;
      }
    }
    return check == a.length;
  }

//https://www.codewars.com/kata/57cc981a58da9e302a000214