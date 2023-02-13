// 1. Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
    return number%2 == 0 ? "Even" : "Odd"
  }

// 2. Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow
function solution(str){
    return str.split("").reverse().join("")
  }


// 3. https://www.codewars.com/kata/56f7f8215d7c12c0e7000b19/train/javascript
class Person {
    // Get coding in ES6 :D
  constructor (firstName = "John", lastName="Doe", age=0, gender="Male" ){
      this.firstName= firstName,
      this.lastName= lastName,
      this.age= age,
      this.gender= gender
      this.sayFullName = function() {
        return this.firstName + " " + this.lastName;
      }
  }
  
  static GreetExtraTerrestrials (raceName) {
    return `Welcome to Planet Earth ${raceName}`
  }
}