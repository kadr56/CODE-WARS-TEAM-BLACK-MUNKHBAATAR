// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

function solution(str, ending){
    // TODO: complete
    if(ending == "") return true;
    let endingLength = ending.length;
    return (str.slice(-endingLength) == ending );
  }


// Learned better way. 
function solution(str, ending){
    return str.endsWith(ending);
  }


//  - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - *
  //https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
  function disemvowel(str) {
  
    const newString = str.split("").map(y => {
      x = y.toLowerCase();
       if(x != "a" && x != 'e' && x != 'o' && x != 'i' && x!= "u" ) 
         return y;
     }).join("")
     return newString;
   }


// Learned better way.
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }


  