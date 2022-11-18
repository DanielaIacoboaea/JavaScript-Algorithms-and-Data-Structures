// check individual strings after removing all 
// non-alphanumeric characters
function checkPalindrome(palind){
 
  for (let i = 0; i <= (palind.length/2-1); i++){

    if (palind[i].toLowerCase() !== palind[palind.length-1-i].toLowerCase())
    {
      return false;
    }
  }
  return true;
}


function palindrome(str) {

  //remove non-alphanumeric characters
  let regex = /[a-z0-9]/ig;
  let alphaNumStr = str.match(regex);
  
  if (checkPalindrome(alphaNumStr)){

    return true;
  }else{
    
    return false;
  }
}

console.log(palindrome("almostomla"));