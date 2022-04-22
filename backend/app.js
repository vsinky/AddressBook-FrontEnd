// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end('Hello this is addressbook server');
// });

// server.listen(3001, () => {
//     console.log('Server is started');
// });



// const express = require('express');
// const app = express()

// app.get('/', (req, res) => {
//     res.send('Hello Adressbook is working');
// });

// app.listen(3001, () => {
//     console.log('Server is Started');
// })


const express = require('express');
const app = express();
app.use(express.json());
const books = [{
        id: 1,
        description: "Math",
    },
    {
        id: 2,
        description: "Biology",
    },
    {
        id: 3,
        description: "programing",
    },
];
app.get("/", (req, res) => {
    console.log(req);

    res.send(data);
});

app.get("/books", (req, res) => {
    //  res.setHeader("Content-Type", "application/json");
    //  res.setHeader("My-Header", "ABC");
    // res.status(500).json({ message: 'Something went wrong' });
    res.status(200).json({ message: "Sucessful" });

    // res.json({
    //     success: true,
    //     result: books
    // });

});
app.get("/api/book", (req, res) => { // -> /api/book
    console.log(req.query);
    res.status(200).json({ message: "Sucessfull", data: req.query });
});

app.post('/api/create-book', (req, res) => { // /api/create-book
    console.log(req.body);
    res.status(200).json({ message: "Sucessfull", data: req.body });
});

app.listen(3001, () => {
    console.log("Server is started");
});