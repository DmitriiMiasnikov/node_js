const fs = require('fs'); // file system
const path = require('path');

// fs.mkdir(path.join(__dirname, 'notes'), (err) => {  // создание папки
//     if (err) throw new Error(err)
//     console.log('dir was created')
// })

// fs.writeFile(path.join(__dirname, 'notes', 'mynotes.txt'),  // создание файла
//     'Hello world',
//     (err) => {
//         if (err) throw err
//         console.log('file was created')

//         fs.appendFile(path.join(__dirname, 'notes', 'mynotes.txt'),  // добавляем текст в файл
//             ' from append file',
//             (err) => {
//                 if (err) throw err
//                 console.log('file was changed')
//                 fs.readFile(path.join(__dirname, 'notes', 'mynotes.txt'),  // вывести содержимое файла
//                     'utf-8',
//                     (err, data) => {
//                         if (err) throw err
//                         console.log(data)
//                     })
//             })
//     })


// переименование файла
fs.rename(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    err => {
        if (err) throw err
        console.log('file renamed')
    }
)