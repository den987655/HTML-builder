const { stdin, stdout } = process;
const fs = require('fs');
/* const path = require('path'); */




stdout.write('Привет! Напиши текст\n');
stdin.on('data', data => {
  fs.writeFile('./02-write-file/text1.txt', `stdout.write${data} data`, () => {

});
  stdout.write('Твой текст: ');
  stdout.write(data);
  process.exit();
});
process.on('exit', () => stdout.write('Удачи!'));




/* stdout.write('Привет\n');
stdin.on('data', data => {
  stdout.write('Привет, ');
  stdout.write(data);
  process.exit();
});
process.on('exit', () => stdout.write('Удачи!')); */