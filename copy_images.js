const fs = require('fs');
const path = require('path');

const sourceDir = 'C:\\Users\\Acer Predator\\.gemini\\antigravity\\brain\\69dca085-ae81-4552-abad-7329386e6f73';
const destDir = path.join(__dirname, 'public', 'segments');

if (!fs.existsSync(destDir)){
    fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(sourceDir);
files.forEach(file => {
    if (file.includes('_segment_') && file.endsWith('.png')) {
        let newName = file.split('_17')[0] + '.png'; // simplify name
        fs.copyFileSync(path.join(sourceDir, file), path.join(destDir, newName));
        console.log(`Copied ${file} to ${newName}`);
    }
});
