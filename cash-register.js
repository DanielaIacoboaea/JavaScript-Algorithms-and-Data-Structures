// 100 pennies
// 20 nickels
// 10 dimes
// 4 quarters
// each = 1 dollar

// start giving change with the highest currency available that's
// less than or equal to change due 
function findHigherCurrency(currencyUnits, changeDue){

  for (let i = 0; i < currencyUnits.length; i++){

    if (currencyUnits[i][1] > changeDue){

      return currencyUnits[i-1][0];
    }
  }
}

// find index of that currency within provided cid
function findIndexOfCurrency(cid, currencyName){

  for (let i = 0; i < cid.length; i++){

    if (cid[i][0] === currencyName){
      return i;
    }
  }

}


function checkCashRegister(price, cash, cid) {

  let returnChange = {status: null, change: []};
  let changeToGiveBack = cash - price;

  const currencyUnits = [
    ['PENNY', 0.01],
    ['NICKEL', 0.05],
    ['DIME', 0.1],
    ['QUARTER', 0.25],
    ['ONE', 1],
    ['FIVE', 5],
    ['TEN', 10],
    ['TWENTY', 20],
    ['ONE HUNDRED', 100]
  ];

  // find total amount in the register
  // determine if there are insufficient funds,
  // or close register (total cash = due cash) 
  let totalCash = 0;

  for (let i = 0; i < cid.length; i++){
    totalCash += cid[i][1];
  }

  totalCash = Math.round(totalCash * 100) / 100;

  if (totalCash < changeToGiveBack){

    returnChange['status'] = "INSUFFICIENT_FUNDS";
    return returnChange;

  }else if (totalCash === changeToGiveBack){

     returnChange['status'] = "CLOSED";
     returnChange['change'] = cid;
     return returnChange;

  }else{

    //otherwise, find change 
      let currentCurrency = findHigherCurrency(currencyUnits, changeToGiveBack);
      let index = findIndexOfCurrency(cid, currentCurrency);
      
      while (changeToGiveBack > 0){

        for (let i = index; i >= 0; i--){
          let found = false;
          
          while (cid[i][1] > 0 && changeToGiveBack > 0 && changeToGiveBack >= currencyUnits[i][1]){
            
            changeToGiveBack -= currencyUnits[i][1];
            changeToGiveBack = Math.round(changeToGiveBack * 100) / 100;
            
            for (let j = 0; j < returnChange.change.length; j++){

              if(returnChange.change[j][0] === cid[i][0]){
                returnChange.change[j][1] += currencyUnits[i][1];
                found = true;
              }
            }
            
            if (found === false){
              returnChange.change.push([cid[i][0], currencyUnits[i][1]]);
            }
          
            cid[i][1] -= currencyUnits[i][1];
            totalCash -= currencyUnits[i][1];
          }
          if (changeToGiveBack === 0){
            break;
          }
        }

        if (changeToGiveBack !== 0){

          returnChange['status'] = "INSUFFICIENT_FUNDS";
          returnChange['change'] = [];
          return returnChange;
        }
    }
   
  if (totalCash > 0){
    returnChange['status'] = 'OPEN';
  }

  return returnChange;
  
  }
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));