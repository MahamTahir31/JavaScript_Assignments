// Question 1:

// let array1 = [3, [22, 'great', [true, '2'],[false,'1']],'fact'];

// Question 2:

// let array2 = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

// Question 3:

// document.write("Counting from 1 to 10: ");
// for (let i=1; i<=10; i++){
//     document.write("<br>");
//     document.write(i);

// }

// Question 4:

// tabNum = +prompt("Enter a number to show its multiplication table: ");
// tabLength = +prompt("Enter length of multiplication table: ");
// document.write("Table of  "+tabNum+ " :");
// for (let i=1; i<tabLength+1; i++){
//     document.write("<br>"+tabNum+ " x "+i+ " = "+ (tabNum*i));
// }

// Question 5:

// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (let i=0; i<(fruits.length); i++){
//     document.write("<br>"+fruits[i]);
// }
// document.write("<br>");
// for (let j=0; j<(fruits.length); j++){
//     document.write("<br>Element at index "+j+ " is "+fruits[j]);
// }

// Question 6:

// document.write("Counting: <br><br>");
// for (let i=1; i<16; i++){
//     document.write(i+", ");
// }
// document.write("<br>");
// document.write("<br>");
// document.write("Reverse counting: <br><br>");
// for (let i=10; i>0; i--){
//     document.write(i+", ");
// }
// document.write("<br>");
// document.write("<br>");
// document.write("Even: <br><br>");
// for (let i=0; i<21; i+=2){
//     document.write(i+", ");
// }
// document.write("<br>");
// document.write("<br>");
// document.write("Odd: <br><br>");
// for (let i=1; i<20; i+=2){
//     document.write(i+", ");
// }
// document.write("<br>");
// document.write("<br>");
// document.write("Series: <br><br>");
// for (let i=2; i<21; i+=2){
//     document.write(i+"k, ");
// }

// Question 7:

// let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// function BakeItem() {
//   let input = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] === input.toLowerCase()) {
//       alert(input + " is available at index " + i + " in our bakery.");
//       return;
//     }
//   }
//   alert("We are sorry, " + input + " is not available in our bakery.");
// }
// BakeItem();

// Question 8:

// let Aa = [24, 53, 78, 91, 12];
// document.write("Array items: ");
// document.write(Aa);
// let num = 0;
// for (let i = 0; i < Aa.length; i++) {
//   if (Aa[i] > num) {
//     num = Aa[i];
//   }
// }
// document.write("<br>The largest number is "+ num);

// Question 9:

// let Ab = [24, 53, 78, 91, 12];
// document.write("Array items: ");
// document.write(Ab);
// let num1 = Ab[0];
// for (let i = 0; i < Ab.length; i++) {
//   if (Ab[i] < num1) {
//     num1 = Ab[i];
//   }
// }
// document.write("<br>The smallest number is "+num1);

// Question 10:

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
      document.write(i+", ");
    }
  }