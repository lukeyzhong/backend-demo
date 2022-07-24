const http = require('http');

const server = http.createServer((req, res) => {
    // console.log('request made');
    console.log(req.url);

    // set header content type
    res.setHeader('Content-Type', 'text/plain');
    //write things in html
    res.write('hello, ninjas');
    res.end();

})

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
})