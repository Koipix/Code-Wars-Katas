function getMiddle(s){
    var a = s.length;
      if (a == 1) return s;
      if ( a & 1 ) {
          a =  Math.floor(a/2);     
       return s[a];
       } else {
        a = (a/2); //4
        return s[a-1]+s[a];
      }
  }
// console.log(getMiddle("gamedad")); 
// console.log(getMiddle("gamepdad")); 
// console.log(getMiddle("a")); 

//if odd. length 7: math.floor = 7/2 = 3 (math.floor) return 3("e")
//if even. Else: a(8) = 8/2 = 4, then return s[a(4)-1] = 3rd string + s[a(4)] = 4rth string