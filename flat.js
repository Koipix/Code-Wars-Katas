function openOrSenior(data){
    const numRows = data.length;
    const numCols = data[0].length;
    
    for (let i = 0; i < numRows * numCols; i++) {
      const row = Math.floor(i / numCols);
      const col = i % numCols;

      const element = data[row][col];

      console.log(element);
    }
  }
  console.log(openOrSenior([[1,2],[3,4],[5,6]]))