// receive the number split into a list 
// to convert it
function computeConversion(list, size){

  let buildRomanNum = [];

  // add base roman numerals in an object
  const baseDecToRoman = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
  };

  // use size of the list to find the digits places 
  // within the number 
  while (size > 0){

    let powerOfTen = Math.pow(10, size-1);
    let index = list.length - size;
   
    // make conversions using powers of 10 and
    // individual digits from the list 
    if (list[index] < 4){

      // just push the powerOfTen: e.g: I
      for (let i = 0; i < list[index]; i++)
      {
        buildRomanNum.push(baseDecToRoman[powerOfTen]);
      }

    }else if (list[index] === 4){

      // build the number e.g: 4 = IV
      // use the power of ten * 5 and subtract the power of ten 
      // meaning add it before power of ten * 5
      buildRomanNum.push(baseDecToRoman[powerOfTen]);
      buildRomanNum.push(baseDecToRoman[5 * powerOfTen]);

    }else if (list[index] >= 6 && list[index] < 9){

      // build the number e.g: 6 = VI
      // use the power of ten * 5 and add the power of ten 
      // meaning add it after power of ten * 5
      buildRomanNum.push(baseDecToRoman[5 * powerOfTen]);

      for (let i = 0; i < list[index] - 5; i++){
        buildRomanNum.push(baseDecToRoman[powerOfTen]);
      }

    }else if (list[index] === 9){

      // e.g: 90 = XC
      //build by substracting the power of 10 from next power of ten
      buildRomanNum.push(baseDecToRoman[powerOfTen]);
      buildRomanNum.push(baseDecToRoman[Math.pow(10, size)]);

    }else if (list[index] === 5){
      buildRomanNum.push(baseDecToRoman[5 * powerOfTen]);
    }
    size--;
  }
  
  return buildRomanNum.join("");
}


function convertToRoman(num) {

  // split the number into an array
  // to convert individual digits based on 
  // their units place within the number 
  let strNum = num.toString();
  let listStrNum = strNum.split("");
  let listNumStr = listStrNum.map(string => parseInt(string));

  let conversionResult = computeConversion(listNumStr, listNumStr.length);

 return conversionResult;
}

convertToRoman(3999);