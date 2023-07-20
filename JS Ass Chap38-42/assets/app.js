// Question-1:

// function power(a,b){
//     return a**b;
// }
// let Num = +prompt("Enter number:");
// let powerNum = +prompt("Enter power:");
// let calcPower = power(Num, powerNum);
// document.write("The result of "+Num+ " raised to the power "+powerNum+ " is "+calcPower);

// Question-2:

// function isLeapYear(year) {
//     if (year % 4 === 0) {
//       return true;
//     } else {
//       return false;
//     }
// }
// let inputYear = parseInt(prompt("Enter a year:"));
// let result = isLeapYear(inputYear);
// if (result) {
//     document.write("The year " + inputYear + " is a leap year.");
// } else {
//     document.write("The year " + inputYear + " is not a leap year.");
// }

// Question-3:

// function calculateS(a, b, c) {
//     let s = (a + b + c) / 2;
//     return s;
// }
// function calculateArea(a, b, c) {
//     let s = calculateS(a, b, c);
//     let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
// }
// let sideA = parseFloat(prompt("Enter the length of side A:"));
// let sideB = parseFloat(prompt("Enter the length of side B:"));
// let sideC = parseFloat(prompt("Enter the length of side C:"));
// let triangleArea = calculateArea(sideA, sideB, sideC);
// document.write("The area of the triangle is: " + triangleArea.toFixed(3));
  
// Question-4:

// function calculateAverage(subject1, subject2, subject3) {
//     let average = (subject1 + subject2 + subject3) / 3;
//     return average;
// }
// function calculatePercentage(totalMarks, obtainedMarks) {
//     let percentage = (obtainedMarks / totalMarks) * 100;
//     return percentage;
// }function mainFunction() {
//     let subject1Marks = parseFloat(prompt("Enter marks for subject 1:"));
//     let subject2Marks = parseFloat(prompt("Enter marks for subject 2:"));
//     let subject3Marks = parseFloat(prompt("Enter marks for subject 3:"));
  
//     let averageMarks = calculateAverage(subject1Marks, subject2Marks, subject3Marks);
//     let percentage = calculatePercentage(100, averageMarks);
  
//     document.write("Average Marks: " + averageMarks.toFixed(2) + "<br>");
//     document.write("Percentage: " + percentage.toFixed(2) + "%");
// }
// mainFunction();
  
// Question-5:

// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === char) {
//         return i;
//       }
//     }
//     return -1;
// }
// let inputString = prompt("Enter a string:");
// let inputChar = prompt("Enter character: ");
// let result = customIndexOf(inputString, inputChar);
// if (result !== -1) {
//     document.write("The character '" + inputChar + "' is found at index " + result + " in the string.");
// } else {
//     document.write("The character '" + inputChar + "' is not found in the string.");
// }

// Question-6:

// function deleteVowels(sentence) {
//     let result = '';
//     for (let i = 0; i < sentence.length; i++) {
//       let char = sentence[i];
//       if (!isVowel(char)) {
//         result += char;
//       }
//     }
//     return result;
// }
// function isVowel(char) {
//     let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//     if (vowels.includes(char)) {
//       return true;
//     }
//     return false;
// }
// let inputSentence = prompt("Enter a sentence (not more than 25 characters):");
// if (inputSentence.length > 25) {
//     document.write("Error: Sentence length exceeds the limit.");
// } else {
//     let result = deleteVowels(inputSentence);
//     document.write("Original sentence: " + inputSentence + "<br>");
//     document.write("Sentence after removing vowels: " + result);
// }
  
// Question-7:

// function countSuccessiveVowels(text) {
//     let count = 0;
//     for (let i = 0; i < text.length - 1; i++) {
//       let char1 = text[i];
//       let char2 = text[i + 1];
//       char1 = char1.toLowerCase();
//       char2 = char2.toLowerCase();
//       switch (char1) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           switch (char2) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//               count++;
//               break;
//           }
//           break;
//       }
//     }
//     return count;
// }
// let inputText = prompt("Enter a sentence: ");
// let result = countSuccessiveVowels(inputText);
// document.write("Text: " + inputText + "<br>");
// document.write("Occurrences of two successive vowels: " + result);

// Question-8:

// function convertToMeters(distance) {
//     let meters = distance * 1000;
//     return meters;
// }
// function convertToFeet(distance) {
//     let feet = distance * 3280.84;
//     return feet;
// }
// function convertToInches(distance) {
//     let inches = distance * 39370.1;
//     return inches;
// }
// function convertToCentimeters(distance) {
//     let centimeters = distance * 100000;
//     return centimeters;
// }
// let inputDistance = parseFloat(prompt("Enter the distance between two cities (in km):"));
// let distanceInMeters = convertToMeters(inputDistance);
// let distanceInFeet = convertToFeet(inputDistance);
// let distanceInInches = convertToInches(inputDistance);
// let distanceInCentimeters = convertToCentimeters(inputDistance);
// document.write("Distance: " + inputDistance + " km <br>");
// document.write("Distance in Meters: " + distanceInMeters + " m <br>");
// document.write("Distance in Feet: " + distanceInFeet + " ft <br>");
// document.write("Distance in Inches: " + distanceInInches + " inches <br>");
// document.write("Distance in Centimeters: " + distanceInCentimeters + " cm <br>");
  
// Question-9:

// function calculateOvertimePay(hoursWorked) {
//     const standardHours = 40;
//     const overtimeRate = 12;
//     let overtimeHours = 0;
//     let overtimePay = 0;
//     if (hoursWorked > standardHours) {
//       overtimeHours = hoursWorked - standardHours;
//       overtimePay = overtimeHours * overtimeRate;
//     }
//     return overtimePay;
// }
// let hoursWorked = parseFloat(prompt("Enter the number of hours worked:"));
// let overtimePay = calculateOvertimePay(hoursWorked);
// document.write("Hours worked: " + hoursWorked + "<br>");
// document.write("Overtime pay: Rs. " + overtimePay.toFixed(2));
  
// Question-10:

function calculateCurrencyNotes(amount) {
    const denomination100 = 100;
    const denomination50 = 50;
    const denomination10 = 10;
    let notes100 = Math.floor(amount / denomination100);
    amount %= denomination100;
    let notes50 = Math.floor(amount / denomination50);
    amount %= denomination50;
    let notes10 = Math.floor(amount / denomination10);
    return {
      notes100: notes100,
      notes50: notes50,
      notes10: notes10
    };
  }
let amountToWithdraw = parseInt(prompt("Enter the amount to be withdrawn (in hundreds):"));
let notes = calculateCurrencyNotes(amountToWithdraw);
document.write("Amount to withdraw: Rs. " + (amountToWithdraw) + "<br>");
document.write("Number of 100 notes: " + notes.notes100 + "<br>");
document.write("Number of 50 notes: " + notes.notes50 + "<br>");
document.write("Number of 10 notes: " + notes.notes10 + "<br>");
