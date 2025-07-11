// Question 1: Copy source.txt to destination.txt
const fs = require('fs');

fs.writeFileSync('source.txt', ''); // Ensure destination file is empty
// Check if source file exists
if (fs.existsSync('source.txt')) {
    // Read source file and write to destination
    const content = fs.readFileSync('source.txt', 'utf8');
    fs.writeFileSync('destination.txt', content);
    console.log('File copied successfully!');
} else {
    console.log('Source file does not exist.');
}