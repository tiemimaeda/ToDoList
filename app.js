// const express = require('express');
// const app = express();
// const path = require('path');
// const router = express.Router();


// router.get('/', function(req, res) {
//     res.sendFile(path.join(`${__dirname}/src/index.html`))
// });

// app.use('/', router);
// app.listen(3000);

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // if(req.url === '/') {
    //    fs.readFile(path.join(__dirname, 'src', 'index.html'), (err, content) => {
    //        if (err) throw err;
    //         res.writeHead(200, {'Content-Type': 'text/html'});
    //         res.end(content);
    //    })
    // }

    let filePath = path.join(__dirname, 'src', req.url === '/' ? 'index.html' : req.url);

    let extname = path.extname(filePath);

    let contentType = 'text/html';
    
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;                       
    }

    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code == 'ENOENT') {
                res.writeHead(200)
                console.log('page not found')
            } else {
                res.writeHead(500);
                res.end(`Server Erro: ${err.code}`);
            }
        } else {
            res.writeHead(200, {'Content-type': 'text/html'});
            res.end(content, 'utf8');
        }
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));