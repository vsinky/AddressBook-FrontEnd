const express = require("express");
const { getAllBooks, createBook, updateBook, deleteBook } = require("../controllers/booksController");
const router = express.Router();

router.route('/books').get(getAllBooks);

router.route('/create-book').post(createBook);

router.route('/book/:id').put(updateBook);

router.route('/book/:id').delete(deleteBook);

module.exports = router;



// const express = require("express");
// const { getAllBooks, createBook } = require("../controllers/booksController");
// const router = express.Router();

// router.route('/books').get(getAllBooks);

// router.route('/create-book').post(createBook);

// module.exports = router;

// app.get("/", (req, res) => { // api/
//   console.log(req);

//   res.send("data");
// });


// app.get("/books", (req, res) => {  // /api/books
//   // res.setHeader("Content-Type", "application/json");
//   // res.setHeader("My-Header", "ABC");
//   // res.status(500).json({message: 'SOmething went wrong'});
//   res.status(200).json({ message: "Sucessful" });

//   //   res.json({
//   //     success: true,
//   //     result: books
//   // });
// });

// app.get("/book", (req, res) => { // -> /api/book
//   console.log(req.query);
//   res.status(200).json({ message: "Sucessfull", data: req.query });
// });
// app.post("/create-book", (req, res) => { // -> /api/create-book
//   console.log(req.body);
//   res.status(200).json({ message: "Sucessfull", data: req.body });
// });