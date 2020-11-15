// Code your solution here!

// prompt" Write a recursive function to print out all of the characters in a string.


//writing it to work for a single example
// function printString(myString) {
//     console.log(myString[0], myString[1], myString[2], myString[3], myString[4]);
// }

// printString("pizza")

//abstracting it using recursion

function printString(myString) {
    console.log(myString[0]);
   
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
  }

  function reverseString(myString) {
        if (myString.length === 1) {
            return myString
        } else {
            return reverseString(myString.substring(1)) + myString[0]
        }
  }