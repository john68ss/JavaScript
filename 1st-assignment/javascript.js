function add7(number){
    return number + 7;
}

console.log(add7(5));

function multiply(a,b) {
    return a*b;
}

console.log(multiply(5,5));

function capitalize(str) {
    //checking first if string is empty
    if (!str) return str;

    //covert first character to uppercase and the rest to lowercase
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

//exaple usage
console.log(capitalize("capitalize"));
console.log(capitalize("CAPITALIZE"));
console.log(capitalize("cApiTALize"));
console.log(capitalize("another!"));
console.log(capitalize(""));


function lastLetter(str) {
    // Check if the string is empty
    if (!str) return "";

    // Return the last character of the string
    return str[str.length - 1];
}

// Example Usage
console.log(lastLetter("abcd"));   // Output: "d"
console.log(lastLetter("hello"));  // Output: "o"
console.log(lastLetter("A"));      // Output: "A"
console.log(lastLetter(""));       // Output: ""