function isPangram(string){

  let test = string.replace(/[^a-zA-Z]/g, '').toLowerCase().split(' ').join('').split('')
  const char = new Set();

  for (let i = 0; i < test.length; i++) {
      char.add(test[i])
  }
  
  console.log(char.size === 26)
}

// isPangram("The quick brown fox jumps over the lazy dog.")