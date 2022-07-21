const fs = require('fs');

// ---------reading files
// ---------readFile is async
// console.log(1);
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });
// console.log(3);

// ---------writing files

// fs.writeFile('./docs/blog1.txt', 'hello world', () => {
//     console.log('file was written');
// })
// if not find the file name, it will create a new file. e.g. blog2

// ---------directories  (something like folders)
if(!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    })
} else {
    fs.rmdir('./assets', err => {
        if (err) {
            console.log(err)
        }
        console.log('folder deleted');
    })
}

// ---------deleting files 
// fs.unlink 
