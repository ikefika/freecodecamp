function findLongestWordLength(str) {
    let strRegex = /\w+(?=\s)|\w+$/g;
    let newArr = str.match(strRegex);
    let size = 0;
    for (let i = 0; i < newArr.length; i++) {
      if (size < newArr[i].length) size = newArr[i].length;
    }
    return size;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  