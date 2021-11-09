const fs = require('fs');
const path = require('path');

const copyDir = () => {
  fs.mkdir('./04-copy-directory/files-copy', () => {
  fs.readFile('./files', 'utf8', () => {

fs.copyFile(path.join(__dirname,'files',), path.join(__dirname,'files-copy'), err => {
if(err) throw err; // не удалось скопировать файл
console.log('Файл успешно скопирован');
});

fs.copyFile(path.join(__dirname,'files/test-css.css',), path.join(__dirname,'files-copy/test-css.css'), err => {
if(err) throw err; // не удалось скопировать файл
console.log('Файл успешно скопирован');
});
fs.copyFile(path.join(__dirname,'files/test-image.jpg',), path.join(__dirname,'files-copy/test-image.jpg'), err => {
if(err) throw err; // не удалось скопировать файл
console.log('Файл успешно скопирован');
});
fs.copyFile(path.join(__dirname,'files/test-js.js',), path.join(__dirname,'files-copy/test-js.js'), err => {
if(err) throw err; // не удалось скопировать файл
console.log('Файл успешно скопирован');
});
fs.copyFile(path.join(__dirname,'files/test-text.txt',), path.join(__dirname,'files-copy/test-text.txt'), err => {
if(err) throw err; // не удалось скопировать файл
console.log('Файл успешно скопирован');
});

});

});

};
copyDir();
