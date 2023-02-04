function reverseWords(str) {

    const split = str.split(" ");
    let reveresed = split.map(function(arr) {
        return arr.split("").reverse().join("");
    });
    let fin = reveresed.join(" ");
    return fin;

    //https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
  }