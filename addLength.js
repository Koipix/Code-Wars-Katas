function addLength(str) {
    let split = str.split(' ');
    let result = [];
    for (let i = 0; i < split.length; i++) {
      result.push(`${split[i]} ${split[i].length}`);
    }
    return result;
}
console.log(addLength("good morning all world"))
  