// Que-1:

// let time = new Date();
// document.write(time);

// Que-2:

// time = new Date();
// document.write("<br>")
// let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// let theMonth = time.getMonth();
// let nameOfMonth = months[theMonth];
// alert("Current Month : " +nameOfMonth);

// Que-3:

// time = new Date();
// let Days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// let theDay = time.getDay();
// let dayOfWeek = Days[theDay];
// alert("Today is : " +dayOfWeek);

// Que-4:

// time = new Date();
// Days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// theDay = time.getDay();
// dayOfWeek = Days[theDay];
// if (dayOfWeek === "Sat" || dayOfWeek === "Sun") {
//     document.write("<br> It's Fun Day!");
// }

// Que-5:

// time = new Date();
// document.write(time);
// let todayDate = time.getDate();
// if (todayDate < 16){
//     document.write("<br>First fisteen Days of month");
// }else{
//     document.write("<br>Last fifteen days of month");
// }

// Que-6:

// time = new Date();
// let milliSecs = time.getTime();
// document.write("<br>Elapsed milliseconds since January 1,1970 :" +milliSecs);
// let minutes = milliSecs/(1000*60);
// document.write("<br>Elapsed minutes since January 1,1970 :" +minutes);

// Que-7:

// time = new Date();
// document.write(time);
// let hours = time.getHours();
// if (hours < 12){
//     alert("It's AM");
// }else{
//     alert("It's PM");
// }

// Que-8:

// let laterDate = new Date(2020, 11, 31);
// document.write("<br>"+laterDate);

// Que-9:

// time = new Date();
// document.write(time);
// let ramadanDate = new Date(2023, 2, 22);
// let timeDifference = time.getTime() - ramadanDate.getTime();
// let daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
// alert("<br>Number of days past since 1st Ramadan: " + daysPassed);

// Ques-10:

// time = new Date();
// document.write(time);
// let beginningOf2015 = new Date(2015, 0, 1);
// let timeDifference = time.getTime() - beginningOf2015.getTime();
// let secondsElapsed = Math.floor(timeDifference / 1000);
// document.write("<br>Seconds elapsed since the beginning of 2015: " + secondsElapsed);

// Ques-11:

// time = new Date();
// document.write(time);
// let currentHour = time.getHours();
// time.setHours(currentHour -1);
// document.write("<br>One hour ago, it was: " + time);

// Ques-12:

// time = new Date();
// document.write(time);
// time.setFullYear(time.getFullYear() - 100);
// alert("<br>Date 100 years back: " + time);

// Ques-13:

// let userAge = +prompt("Enter your age: ");
// document.write("Your age is: " + userAge);
// time = new Date();
// let currentYear = time.getFullYear();
// let birthYear = currentYear - userAge;
// document.write("<br>Your birth year is " + birthYear);

// Ques-14:

let customerName = prompt("Enter customer name:");
let currentMonth = prompt("Enter current month:");
let numberOfUnits = parseFloat(prompt("Enter number of units:"));
let chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
let dueDate = prompt("Enter due date:");
let netAmountPayable = numberOfUnits * chargesPerUnit;
let latePaymentSurcharge = netAmountPayable * 0.1;
let grossAmountPayable = netAmountPayable + latePaymentSurcharge;
document.write("<h2>K-Electric Bill</h2>");
document.write("Customer Name: " + customerName + "<br>");
document.write("Current Month: " + currentMonth + "<br>");
document.write("Number of Units: " + numberOfUnits.toFixed(2) + "<br>");
document.write("Charges per Unit: " + chargesPerUnit.toFixed(2) + "<br><br>");
document.write("Net Amount Payable (within Due Date): " + netAmountPayable.toFixed(2) + "<br>");
document.write("Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "<br>");
document.write("Gross Amount Payable (after Due Date): " + grossAmountPayable.toFixed(2) + "<br>");