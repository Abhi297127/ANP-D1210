// Question 1: Node.js Hello Messages Program

// Part 1: Display two separate messages
console.log("Hello, this is my first Node.js program!");
console.log("I am excited to learn more about Node.js!");

console.log("\n" + "=".repeat(50) + "\n");

// Part 2: Concatenate and display as single line
const message1 = "Hello, this is my first Node.js program!";
const message2 = "I am excited to learn more about Node.js!";
const concatenatedMessage = message1 + " " + message2;

console.log("Concatenated message:");
console.log(concatenatedMessage);

// Alternative approach using template literals
console.log("\nAlternative using template literals:");
console.log(`${message1} ${message2}`);