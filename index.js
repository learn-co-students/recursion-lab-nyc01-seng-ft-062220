// The substring() method returns the part of the string 
//between the start and end indexes, or to the end of the string.

function printString (str) {
    console.log(str[0])
    if (str.length > 1){
        let mySubString = str.substring(1, str.length)
        printString(mySubString)
    } else {
        return true
    }
}

function reverseString(str){
    if (str === ""){
       return "";
    } else {
        return reverseString(str.substring(1))+ str.charAt(0)
    }
}

function isPalindrome(str){
    // A palindrome is a word or sentence that’s spelled the same way both 
    // forward and backward, ignoring punctuation, case, and spacing.
 if (str.length === 0) {
     return true
 } else if(str[0] === str[str.length-1]){
     return isPalindrome(str.slice(1, str.length-1))
 } else {
     return false
 }
}



