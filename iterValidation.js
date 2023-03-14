function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }
  let x = 0;
  let y = 0;
  for (let i = 0; i < walk.length; i++) {
    if (walk[i] === 'n') {
      y++;
    } else if (walk[i] === 's') {
      y--;
    } else if (walk[i] === 'e') {
      x++;
    } else if (walk[i] === 'w') {
      x--;
    }
  }
  return x === 0 && y === 0;
}

///Java ver
public class TenMinWalk {
  public static boolean isValid(char[] walk) {
    if (walk.length != 10) {
      return false;
    }
    int x = 0;
    int y = 0;
    
    for (var i = 0; i < walk.length; i++) {
      if (walk[i] == 'n') x++;
      else if (walk[i] == 's') x--;
      else if (walk[i] == 'w') y++;
      else if (walk[i] == 'e') y--;
    }
    return x == 0 && y == 0;
  }
}

//OLD VER.
// function isValidWalk(walk) {
//   let min = 0; 
//   if (walk[1] === walk[walk.length - 1]) {
//     for (let i = 0; i < walk.length; i++) { 
//       if (walk[i] !== walk[i+1]) {
//         min += 1;
//       }
//     }
//     return min == 10;
//   } else return false;
// }

//https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s','w']));
