// Question-1

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "!");
console.log("Hello, " + fullName + "!");


// Question-2

// var userInput = prompt("Enter your favorite mobile phone model:");
// var inputLength = userInput.length;
// document.write("The length of your input is: " + inputLength);


// Question-3

// var word = "Pakistani";
// var index = word.indexOf("n");
// document.write("The index of 'n' in the word 'Pakistani' is: " + index);


// Question-4

// var word = "Hello World";
// var lastIndex = word.lastIndexOf("l");
// document.write("The last index of 'l' in the word 'Hello World' is: " + lastIndex);


// Question-5

// var word = "Pakistani";
// var character = word.charAt(3);
// document.write("The character at the 3rd index in the word 'Pakistani' is: " + character);


// Question-6

// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName.concat(" ", lastName);

// alert("Hello, " + fullName + "!");
// console.log("Hello, " + fullName + "!");


// Question-7

// var word = "Hyderabad";
// var replacedWord = word.replace("Hyder", "Islam");

// document.write("Original word: " + word + "<br>");
// document.write("Replaced word: " + replacedWord);


// Question-8
// var message = "Ali and Sami are best friends. They play cricket and football together.";

// var replacedMessage = message.replace(/and/g, "&");

// document.write("Original message: " + message + "<br>");
// document.write("Replaced message: " + replacedMessage);


// Question-9

// var stringNumber = "472";
// var number = Number(stringNumber);
// document.write("String value: " + stringNumber + "<br>");
// document.write("String type: " + typeof stringNumber + "<br><br>");
// document.write("Number value: " + number + "<br>");
// document.write("Number type: " + typeof number);


// Question-10

// var userInput = prompt("Enter your input:");
// var uppercaseInput = userInput.toUpperCase();

// document.write("Original input: " + userInput + "<br>");
// document.write("Converted input: " + uppercaseInput);


// Question-11

// var userInput = prompt("Enter your input:");
// var titleCaseInput = userInput.toLowerCase().replace(/^(.)|\s(.)/g, function($1) {
//     return $1.toUpperCase();
// });
// document.write("Original input: " + userInput + "<br>");
// document.write("Converted input: " + titleCaseInput);


// Question-12

// var num = 35.36;
// var strNum = num.toString();
// var result = strNum.replace(".", "");
// document.write("Original number: " + num + "<br>");
// document.write("Converted string: " + result);


// Question-13

// var username = prompt("Enter your username:");
// if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
//     // Prompt the user to enter a valid username
//     username = prompt("Please enter a valid username without special symbols [@ . , !]:");
// }
// document.write("Username: " + username);


// Question-15

// var password = prompt("Enter your password:");

// var hasAlphabetAndNumber = /[a-zA-Z].*[0-9]|[0-9].*[a-zA-Z]/;
// var doesNotStartWithNumber = /^[^0-9]/;
// var hasMinimumLength = /^.{6,}$/;

// while (!hasAlphabetAndNumber.test(password) || !doesNotStartWithNumber.test(password) || !hasMinimumLength.test(password)) {

//     password = prompt("Please enter a valid password that meets the requirements:\n- Contains both alphabets and numbers\n- Does not start with a number\n- Has a minimum length of 6 characters");
// }
// document.write("Password: " + password);


// Question-16

// var university = "University of Karachi";
// var universityArray = university.split(" ");
// document.write("Array elements: " + universityArray.join(", "));


// Question-17

// var userInput = prompt("Enter your input:");
// var lastCharacter = userInput.slice(-1);
// document.write("Last character: " + lastCharacter);



// Question-18

// var sentence = "The quick brown fox jumps over the lazy dog";
// var word = "the";

// var regex = new RegExp("\\b" + word + "\\b", "gi");
// var count = (sentence.match(regex) || []).length;

// document.write("Occurrences of the word 'the': " + count);
