// Question 2: Merge file1.txt and file2.txt into merged.txt
const fs = require('fs');

fs.writeFileSync('file1.txt', '1'); // Ensure file1 is empty
fs.writeFileSync('file2.txt', '2'); // Ensure file2 is empty
// Check if both files exist
if (fs.existsSync('file1.txt') && fs.existsSync('file2.txt')) {
    // Read both files
    const content1 = fs.readFileSync('file1.txt', 'utf8');
    const content2 = fs.readFileSync('file2.txt', 'utf8');
    
    // Merge and write to new file
    const mergedContent = content1 + '\n' + content2;
    fs.writeFileSync('merged.txt', mergedContent);
    console.log('Files merged successfully!');
} else {
    console.log('One or both files do not exist.');
}