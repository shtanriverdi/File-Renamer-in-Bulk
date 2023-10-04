const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname);
console.log("directoryPath:", directoryPath);

function getCurrentFilenames() {
  console.log("Current filenames: ");
  fs.readdirSync(__dirname).forEach(file => {
    console.log(file);
  });
}

fs.readdir(directoryPath, function(err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    
    // Start Index
    let nameCount = 0;
    files.forEach(function(file) {
        let oldName = file;
        let newName = nameCount + path.extname(file);
        fs.rename(oldName, newName, () => {
            console.log("\nFile Renamed!\n");
            getCurrentFilenames();
        });
        nameCount += 1;
    });
});