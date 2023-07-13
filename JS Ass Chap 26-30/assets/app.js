// Ques-1:

// let pnum = +prompt("Enter a positive floating point number: ");

// document.write("number: "+pnum);

// let round = Math.round(pnum);
// document.write("<br>Round off value: "+round);
// let floor = Math.floor(pnum);
// document.write("<br>Floor value: "+floor);
// let ceil = Math.ceil(pnum);
// document.write("<br>Ceil value: "+ceil);

// Ques-2:

// let pnum = +prompt("Enter a negative floating point number: ");
// document.write("number: "+pnum);
// let round = Math.round(pnum);
// document.write("<br>Round off value: "+round);
// let floor = Math.floor(pnum);
// document.write("<br>Floor value: "+floor);
// let ceil = Math.ceil(pnum);
// document.write("<br>Ceil value: "+ceil);

// Ques-3:

// let num = +prompt("Enter a number:");
// document.write("The absolute value: "+Math.abs(num));

// Ques-4:

// document.write("Random dice value: "+Math.floor((Math.random()*6)+1));

// Ques-5:

// let randNum = Math.random();
// let coin = randNum < 0.5 ? "Heads" : "Tails";
// document.write("Random coin value: " + coin);

// Ques-6:

// let rNum = Math.floor((Math.random()*100)+1);
// document.write("Random number between 1 and 100: " +rNum);

// Ques-7:

// let userWeight = parseFloat(prompt("Enter your weight in kilograms: "));
// document.write("the weight of user is: " +userWeight+ " Kilograms");

// Ques-8:

let secretNum = Math.floor((Math.random()*10)+1);
let input = +prompt("Enter a number between 1 ti 10: ");
if (input === secretNum){
    document.write("Congratulations! You guessed the right number.");
}else{
    document.write("Oops! You guessed the wrong number.");
}
