/* Roman Numeral Converter
Convert the given number into a roman numeral.

Roman numerals	Arabic numerals
M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1
All roman numerals answers should be provided in upper-case.

*/


let roman = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
    numeral: (resnum) => roman[Math.max.apply(null, Object.keys(roman)
    .filter(numeral => numeral <= resnum)
    )],
    divisor: (resnum) => Math.max.apply(null, Object.keys(roman)
    .filter(numeral => numeral <= resnum)
    )
    
  };
  
  function repeatStringNumTimes(str, num) {
      num < 1 ? str = "" : str += repeatStringNumTimes(str, num - 1);
      return str;
    }
  
  function convertToRoman(num) {
    let romNum = ""; // To store the Roman numeral
    let res = num;  // Remaining number to convert
    
    while (res > 0) {
      romNum = romNum.concat(repeatStringNumTimes(roman.numeral(res), res/Math.floor(roman.divisor(res))))
      res = res % roman.divisor(res);
    }
  
    return romNum;
  
  }
  
  console.log(convertToRoman(3));
  
  
  
  // Prototype code
      // Find largest roman numeral converter from Object: e.g. 36 => 10
      // Divide num by largest RN: Repeat the string value by the answer times: e.g. 36 => XXX
      // Take the remainder and repeat the process: 36/10 => 3 Remainder 6