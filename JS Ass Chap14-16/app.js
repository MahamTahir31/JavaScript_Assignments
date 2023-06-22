// Question-1:

let studentName = [];


// Question-2:

let studentNamesObj = [];


// Question-3:

let food = ["pizza", "burger", "nachos", "pasta"];


// Question-4:

let numbers = [4, 8, 2002, 31, 5];


// Question-5:

let bool = [true, false];


// Question-6:

let mixedArray = ["biryani", 98, true, "mexico"];


// Question-7:

// let educationInPakistan = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("<h1>Qualifications:</h1>");
// document.write("<ol>");
// for (let i = 0; i < educationInPakistan.length; i++) {
//   document.write("<li>" + educationInPakistan[i] + "</li>");
// }
// document.write("</ol>");


// Question-8:

// let stdNames = ["Michael", "John", "Tony"];
// let stdScores = [320, 230, 480];
// let totalMarks = 500;
// for (let a = 0; a < stdNames.length; a++){
//   document.write("Score of " + stdNames[a] + " is " + stdScores[a] + ". Percentage: "+ ((stdScores[a]/totalMarks)*100)+ "%<br>");
// }


// Question-9:

// let colorNames = ["Red", "Orange", "Pink"];
// document.write("Array of color names : "+ colorNames);
// document.write("<br>");
// // a)
// let colorInBeginning = prompt(" Enter the color you want to add to the beginning of the array: ");
// colorNames.unshift(colorInBeginning);
// document.write("Color Array after part a: "+colorNames);
// document.write("<br>");
// // b)
// let colorInEnd = prompt(" Enter the color you want to add to the end of the array: ");
// colorNames.push(colorInEnd);
// document.write("Color Array after part b: "+colorNames);
// document.write("<br>");
// // c)
// let addColorStart = prompt(" Enter the color you want to add to the beginning of the array: ");
// colorNames.unshift(addColorStart);
// addColorStart = prompt(" Enter the color you want to add to the beginning of the array: ");
// colorNames.unshift(addColorStart);
// document.write("Color Array after part c: "+colorNames);
// document.write("<br>");
// // d)
// colorNames.shift();
// document.write("Color Array after part d: "+colorNames);
// document.write("<br>");
// // e)
// colorNames.pop();
// document.write("Color Array after part e: "+colorNames);
// document.write("<br>");
// // f)
// let color = prompt("Enter a color name: ");
// let colPosition = +prompt("Enter the position at you want to add the color:");
// colorNames.splice((colPosition-1),0,color);
// document.write("Color Array after part f: "+colorNames);
// document.write("<br>");
// // g)
// let delColPosition = +prompt("Enter the position you want to delete colors: ");
// let  numOfColors = +prompt("How many colors you want to delete? ");
// colorNames.splice((delColPosition-1), numOfColors);
// document.write("Color Array after part g: "+colorNames);
// document.write("<br>");


// Question-10:

// let stdScoreArray = [320, 230, 480, 120];
// document.write("Scores of Students: "+ stdScoreArray);
// document.write("<br>Ordered Scores of students: "+stdScoreArray.sort());


// Question-11:

// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write("<h2>Cities List: </h2><br>"+cities);
// document.write("<br><br>");
// let selectedCities = [];
// selectedCities = cities.slice(1,4);
// document.write("<h3>Selected Cities: </h3><br>"+selectedCities);


// Question-12:

// var arr = ["This",  "is", "my", "cat"];
// document.write("<h1>Array:</h1><br>"+arr);
// document.write("<h2>String:</h2><br>"+arr.join(" "));


// Question-13:

// let devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
// document.write("<h4>Devices:</h4><br>" + devices + "<br>");
// while (devices.length > 0) {
//   let value = devices.shift();
//   document.write("Out:<br>" + value + "<br>");
// }


// Question-14:

// let devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
// document.write("<h4>Devices:</h4><br>" + devices + "<br>");
// while (devices.length > 0) {
//   let value = devices.pop();
//   document.write("Out:<br>" + value + "<br>");
// }


// Question-15:

let PhoneManufac = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<h3>Select Phone Manufacturer:</h3>");
document.write("<select>");

for (var i = 0; i < PhoneManufac.length; i++) {
  document.write("<option value='" + PhoneManufac[i] + "'>" + PhoneManufac[i] + "</option>");
}

document.write("</select>");