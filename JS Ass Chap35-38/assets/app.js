// Question-1:

// let currentDate = new Date();
// document.write(currentDate);

// Question-2:

// function greet(){
//     let firstName = prompt("Enter first name: ");
//     let lastName = prompt("Enter last name: ");
//     alert("Assalam o alaikum! "+firstName+" "+lastName);
// }
// greet();

// Question-3:

// function add(){
//     let num1 = +prompt("Enter 1st number: ");
//     let num2 = +prompt("Enter 2nd number: ");
//     let result = num1 + num2;
//     alert("After adding the numbers, the result is : "+result);
// }
// add();


// CALCULATOR:
// ___________

// Question-4:

// function calculate(num1, num2, operator) {
//     let result;
  
//     switch (operator) {
//       case '+':
//         result = num1 + num2;
//         break;
//       case '-':
//         result = num1 - num2;
//         break;
//       case '*':
//         result = num1 * num2;
//         break;
//       case '/':
//         result = num1 / num2;
//         break;
//       default:
//         return "Invalid operator";
//     }
-
//     return result;
//   }
  
//   let number1 = parseFloat(prompt("Enter the first number:"));
//   let number2 = parseFloat(prompt("Enter the second number:"));
//   let operator = prompt("Enter the operator (+, -, *, /):");
  
//   let calculationResult = calculate(number1, number2, operator);
//   document.write("The result is: " + calculationResult);
  
// Question-5:

// function square(number) {
//     return number * number;
//   }

// let inputNumber = parseFloat(prompt("Enter a number:"));
// let result = square(inputNumber);
// document.write("The square of " + inputNumber + " is: " + result);

// Question-6:

// function factorial(number) {
//     if (number === 0 || number === 1) {
//       return 1;
//     }
  
//     let result = 1;
//     for (let i = 2; i <= number; i++) {
//       result *= i;
//     }
  
//     return result;
// }
// let inputNumber = parseInt(prompt("Enter a number:"));
// let result = factorial(inputNumber);
// document.write("The factorial of " + inputNumber + " is: " + result);

// Question-7:

// function countNumbers(start, end) {
//     if (start <= end) {
//       for (let i = start; i <= end; i++) {
//         document.write(i + "<br>");
//       }
//     } else {
//       for (let i = start; i >= end; i--) {
//         document.write(i + "<br>");
//       }
//     }
// }
// let startNumber = parseInt(prompt("Enter the start number:"));
// let endNumber = parseInt(prompt("Enter the end number:"));  
// countNumbers(startNumber, endNumber);

// Question-8:

// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(number) {
//       return number * number;
//     }
  
//     let baseSquare = calculateSquare(base);
//     let perpendicularSquare = calculateSquare(perpendicular);
//     let hypotenuseSquare = baseSquare + perpendicularSquare;
//     let hypotenuse = Math.sqrt(hypotenuseSquare);
  
//     return hypotenuse;
//   }
// let baseLength = parseFloat(prompt("Enter the base length:"));
// let perpendicularLength = parseFloat(prompt("Enter the perpendicular length:"));  
// let hypotenuseLength = calculateHypotenuse(baseLength, perpendicularLength);
// document.write("The hypotenuse length is: " + hypotenuseLength.toFixed(3));
  
// Question-9:

// 1- Arguments as value:

// function calculateRectangleAreaValue(width, height) {
//   return width * height;
// }
// let areaValue = calculateRectangleAreaValue(5, 10);
// document.write("The area of the rectangle (using value arguments) is: " + areaValue);

// 2- Arguments as Variables:

// function calculateRectangleAreaVariables(width, height) {
//   return width * height;
// }
// let rectWidth = 5;
// let rectHeight = 10;
// let areaVariables = calculateRectangleAreaVariables(rectWidth, rectHeight);
// document.write("The area of the rectangle (using variable arguments) is: " + areaVariables);

// Question-10:

// function isPalindrome(str) {
//   let cleanedStr = str.toLowerCase();
//   let reversedStr = cleanedStr.split('').reverse().join('');
//   return cleanedStr === reversedStr;
// }
// let inputString = prompt("Enter a string:");
// let result = isPalindrome(inputString);
// if (result) {
//   document.write("The string '" + inputString + "' is a palindrome.");
// } else {
//   document.write("The string '" + inputString + "' is not a palindrome.");
// }

// Question-11:

// function capitalizeWords(str) {
//   let words = str.split(' ');
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substring(1);
//   }
//   let capitalizedStr = words.join(' ');
//   return capitalizedStr;
// }
// let inputString = prompt("Enter an input string:");
// let result = capitalizeWords(inputString);
// document.write("Original string: " + inputString + "<br>");
// document.write("Capitalized string: " + result);

// Question-12:

// function findLongestWord(str) {
//   let words = str.split(' ');
//   let longestWord = '';
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   return longestWord;
// }
// let inputString = prompt("Enter a sentence:");
// let result = findLongestWord(inputString);
// document.write("Original string: " + inputString + "<br>");
// document.write("Longest word: " + result);

// Question-13:

// function countOccurrences(str, letter) {
//   let lowercaseStr = str.toLowerCase();
//   let lowercaseLetter = letter.toLowerCase();
//   let count = 0;
//   for (let i = 0; i < lowercaseStr.length; i++) {
//     if (lowercaseStr[i] === lowercaseLetter) {
//       count++;
//     }
//   }
//   return count;
// }
// let inputString = prompt("Enter a string:");
// let inputLetter = prompt("Enter a letter you want to count in string:");
// let result = countOccurrences(inputString, inputLetter);
// document.write("Original string: " + inputString + "<br>");
// document.write("Letter to count: " + inputLetter + "<br>");
// document.write("Occurrences: " + result);

// Question-14:

// THE GEOMETRIZER:
// ________________

function calcCircumference(radius) {
    let circumference = 2 * Math.PI * radius;
    document.write("The circumference is " + circumference.toFixed(3));
  }
  function calcArea(radius) {
    let area = Math.PI * radius * radius;
    document.write("The area is " + area.toFixed(3));
  }
  let inputRadius = parseFloat(prompt("Enter the radius of the circle:"));
  calcCircumference(inputRadius);
  document.write("<br>");
calcArea(inputRadius);