/* const { stdin, stdout } = process; */
const fs = require('fs');
/* const path = require('path'); */

fs.readFile('./text.txt', 'utf-8', (error, data) => {

  fs.writeFile('./text1.txt', data, () => {

  });
});


/* stdout.write('Привет\n');
stdin.on('data', data => {
  stdout.write('Привет, ');
  stdout.write(data);
  process.exit();
});
process.on('exit', () => stdout.write('Удачи!')); */