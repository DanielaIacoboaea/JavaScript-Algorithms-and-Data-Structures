// US phone format: 1 DNN-DNN-NNNN
// D=2–9, N=0–9, 1 - optional

function telephoneCheck(str) {

  let reMatchNum = /^1?\s?(\([2-9]\d{2}\)|[2-9]\d{2})(-|\s+)?[2-9]\d{2}(-|\s+)?\d{4}$/;
  return reMatchNum.test(str);
  
}

console.log(telephoneCheck("1(555)555-5555"));