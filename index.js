// The substring() method returns the part of the string 
//between the start and end indexes, or to the end of the string.

function printString (myString) {
    console.log(myString[0])
    if (myString.length > 1){
        let mySubString = myString.substring(1, myString.length)
        printString(mySubString)
    } else {
        return true
    }
}

function reverseString(myString){
    if (myString === ""){
       return "";
    } else {
        return reverseString(myString.substring(1))+ myString.charAt(0)
    }
}

