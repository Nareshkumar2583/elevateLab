// index.js
const express = require("express");
const app = express();
const port = 8080;
app.use(express.json());
let books = [
  { id: 1, title: "1984", author: "George Orwell" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" }
];
app.get("/books",(req,res)=>{
  res.json(books);
});
app.post("/books/:id",(req,res)=>{
  const{title,author}=req.body
  const newbooks={
    id:books.length+1,
    title,
    author
  }
  books.push(newbooks);
  res.status(200).json(newbooks);
})
app.put('/books/:id', (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;

  const book = books.find(b => b.id === parseInt(id));  // ⚠️ Check for parseInt

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  if (title) book.title = title;
  if (author) book.author = author;

  res.json(book);
});

app.delete("/books/:id",(req,res)=>{
  const{id}=req.params;
  books=books.filter(b=>b.id!==parseInt(id));
  res.json({message:"booked deleted successfully"});
})





app.listen(port, () => {
    console.log(`✅ Server running at http://localhost:${port}`);
});
