function longestConsec(strarr, k) {
      for (let i = 0; i < strarr.length; i += k) {
        let concat = strarr.slice(i,i + k).join('');
        console.log(concat)
  }

}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));