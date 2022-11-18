// from A-Z we have 26 letters 
// think of A-Z as split in two:  
// we can add 13 to the first 13 letters 
// after 13 we will get past the 26th letter (Z)
// so once we get past the 13th letter we will substract 
// 13 from it's ASCII code to get the converted letter   
function convertStr(char){

    //Ascii code for the 13th letter is 77
    if (char <= 77){

      return char + 13;
    }else{
      
      return char - 13;
    }
}

function rot13(str) {
  let buildStr = [];

  for (let i = 0; i < str.length; i++){

    // first get the ASCII code and 
    let asciiCode = str.charCodeAt(i);

    // check if the char is A-Z
    // convert it by shifting the letter by 13 places
    if (asciiCode >= 65 && asciiCode <= 90){

      let convertedAscii = convertStr(asciiCode);
      buildStr.push(String.fromCharCode(convertedAscii));

    }else{
      
      // push the char as it is 
      buildStr.push(str[i]);
    }

  }

  return buildStr.join("");
}

console.log(rot13("SERR PBQR PNZC"));