// const fs = require("fs");
// const path = require("path");

// const operation = process.argv[2];
// const file = process.argv[3];
// const content = process.argv[4];

// switch (operation) {
//   // complete the fillowing function.
    
//   default:
//     console.log(`Invalid operation '${operation}'`);
// }
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const command = args[0];
const filePath = args[1];
const extraParam = args[2];

switch (command) {
  case 'read':
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
    });
    break;
  case 'delete':
    fs.unlink(filePath, (err) => {
      if (err) throw err;
      console.log(`File '${filePath}' deleted`);
    });
    break;
  case 'create':
    fs.writeFile(filePath, '', (err) => {
      if (err) throw err;
      console.log(`File '${filePath}' created`);
    });
    break;
  case 'append':
    fs.appendFile(filePath, `\n${extraParam}`, (err) => {
      if (err) throw err;
      console.log(`Content appended to the file '${filePath}'`);
    });
    break;
  case 'rename':
    const newFilePath = path.join(path.dirname(filePath), extraParam);
    fs.rename(filePath, newFilePath, (err) => {
      if (err) throw err;
      console.log(`File '${filePath}' renamed to '${extraParam}'`);
    });
    break;
  case 'list':
    fs.readdir(filePath, (err, files) => {
      if (err) throw err;
      console.log(files.join('\n'));
    });
    break;
  default:
    console.log(`Invalid operation '${operation}'`);
    break;
}
