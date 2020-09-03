const path = require('path')  // экспортируем модуль path

console.log(path.basename(__filename)) // название файла
console.log(path.dirname(__filename))   // путь до папки
console.log(path.extname(__filename))   // расширение файла (.js)

// {
//     root: 'C:\\',
//     dir: 'C:\\Users\\EVANGELION\\GitHub\\node_js\\refs',
//     base: 'path_ref.js',
//     ext: '.js',
//     name: 'path_ref'
//   }
console.log(path.parse(__filename))

// вводит строку с путем до папки, с папокой 'test' и файлом 'second.html' в ней
// C:\Users\EVANGELION\GitHub\node_js\refs\text\second.html
console.log(path.join(__dirname, 'text', 'second.html'))

console.log(path.resolve(__dirname, 'text', 'second.html'))