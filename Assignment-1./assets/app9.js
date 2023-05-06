// Store the string in a variable
var message = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";

// Display the message in an alert box
alert(message);

// Create a new HTML element to hold the message
var messageElement = document.createElement("p");

// Set the text content of the element to the message
messageElement.textContent = message;

// Append the element to the body of the document
document.body.appendChild(messageElement);
