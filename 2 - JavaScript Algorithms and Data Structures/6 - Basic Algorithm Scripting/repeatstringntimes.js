function repeatStringNumTimes(str, num) {
    num < 1 ? str = "" : str += repeatStringNumTimes(str, num - 1);
    return str;
  }
  
  repeatStringNumTimes("abc", 3);