const fs = require('fs');

// declare where the data come from 
const readStream = fs.createReadStream('./docs/blog3.txt');
// write data into new file
const writeStream = fs.createWriteStream('./docs/blog4.txt')

// 也可以用encoding
// const readStream2 = fs.createReadStream('./docs/bogs.txt', {encoding: 'utf8'});

// 一段一段的数据从blog3 读取 再写到 blog4
readStream.on('data', (chunk) => {
    console.log('---new chunk---')
    console.log(chunk.toString());
    writeStream('\nNew chunk');
    writeStream.write(chunk);
})

// pipe -> short way of readable readStream and writeable writeStrean
