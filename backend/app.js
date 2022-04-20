const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello this is addressbook server');
});

server.listen(3001, () => {
    console.log('Server is started');
});



// const express = require('express');
// const app = express()

// app.get('/', (req, res) => {
//     res.send('Hello Adressbook is working');
// });

// app.listen(3001, () => {
//     console.log('Server is Started');
// })


// const express = require('express');
// const app = express();
// const books = [{
//         id: 1,
//         description: "Math",
//     },
//     {
//         id: 2,
//         description: "Biology",
//     },
//     {
//         id: 3,
//         description: "programing",
//     },
// ];
// app.get("/books", (req, res) => {
//     const data = JSON.stringify({
//         success: true,
//         result: books
//     });
//     res.send(data);
// });

// app.listen(3001, () => {
//     console.log("Server is started");
// });