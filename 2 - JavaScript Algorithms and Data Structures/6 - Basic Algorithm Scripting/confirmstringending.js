function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
  }
  
  console.log(confirmEnding("Bastian", "n"));
  
// Elegant solution using RegExp as object
function confirmEnding1(str, target) {
    
    let targetRegex = new RegExp(target + "$", "i");    // Declares RegEx as object
  
    return targetRegex.test(str);
  }
  
  console.log(confirmEnding1("Bastian", "n"));