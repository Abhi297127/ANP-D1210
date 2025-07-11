// Question 2: Character Counter for Three Sentences

// Method 1: Using predefined sentences
console.log("=== Method 1: Predefined Sentences ===");
const sentence1 = "Node.js is a powerful JavaScript runtime.";
const sentence2 = "It allows developers to build server-side applications.";
const sentence3 = "Learning Node.js opens many career opportunities.";

console.log(`Sentence 1: "${sentence1}"`);
console.log(`Character count: ${sentence1.length}`);
console.log();

console.log(`Sentence 2: "${sentence2}"`);
console.log(`Character count: ${sentence2.length}`);
console.log();

console.log(`Sentence 3: "${sentence3}"`);
console.log(`Character count: ${sentence3.length}`);
console.log();

// Method 2: Using readline for user input
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== Method 2: Interactive Input ===");
console.log("Please enter three sentences:");

let sentences = [];
let currentSentence = 1;

function askForSentence() {
    rl.question(`Enter sentence ${currentSentence}: `, (answer) => {
        sentences.push(answer);
        currentSentence++;
        
        if (currentSentence <= 3) {
            askForSentence();
        } else {
            displayResults();
            rl.close();
        }
    });
}

function displayResults() {
    console.log("\n=== Results ===");
    sentences.forEach((sentence, index) => {
        console.log(`Sentence ${index + 1}: "${sentence}"`);
        console.log(`Character count: ${sentence.length}`);
        console.log();
    });
}

// Start the interactive input
askForSentence();

// Method 3: Using command line arguments
console.log("=== Method 3: Command Line Arguments ===");
console.log("You can also run this program with three sentences as arguments:");
console.log("node filename.js \"First sentence\" \"Second sentence\" \"Third sentence\"");

const args = process.argv.slice(2);
if (args.length >= 3) {
    console.log("\nProcessing command line arguments:");
    args.slice(0, 3).forEach((sentence, index) => {
        console.log(`Sentence ${index + 1}: "${sentence}"`);
        console.log(`Character count: ${sentence.length}`);
        console.log();
    });
}