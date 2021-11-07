


const fs = require('fs');
const path = require('path');



fs.mkdir(path.join(__dirname, 'files-copy'), (err) => {
  if (err) throw err;

  console.log('создал папку');
  
});

fs.copyFile('files/test-css.css', 'files-copy/test-css.css', err => {
   if(err) throw err; // не удалось скопировать файл
   console.log('Файл успешно скопирован');
});
/* fs.copyFile('files/test-css.css', 'files-copy/test-css.css', err => {
  if(err) throw err; // не удалось переместить файл
  console.log('Файл успешно перемещён');
}); */