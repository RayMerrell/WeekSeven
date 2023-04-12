const express=require("express");
const app = express();

require("dotenv").config();
require("./db/connection");
//require ("./modbooks");

const Book = require("./modbooks/model");

app.use("/books", express.static("books"));
app.use("/", express.static("anotherRoute"));
//app.use("/MyRoute", express.static("myRoute"));

app.listen(5001, ()=>console.log("Server is listening"));
app.use(express.json());
app.post("/books/addbook", async (request, response)=>{
    console.log(request.body);
    const newBook= await Book.create({
        title:request.body.title,
        author: request.body.author,
        genre:request.body.genre
    }); 
    const successResponse ={
        message:"Success",
        newBook:newBook
    }
    response.status(201).json(successResponse);
});

// SuccessResponse:
//     type: object  
//     status: 201  
//     properties:
//         message:
//             type: string
//             example: 'success'
//         newBook:
//             type: object
//             properties:
//                 title: string
//                 author: string  
//                 genre: string
//                 _id: string


app.get("/books", (request, response)=>{
    const book ={
        title:"Book Title",
        author:"Big Man",
        genre:"Stoopid books"
    }
    const successResponse ={
        message:"This worked",
        book:book
    }
    response.send(successResponse);
})

app.get("/AnotherRoute", (request, response)=>{
    response.send("This is your other route");
})

app.put("/book", (request, response)=>{
    console.log(request.body);
    const newBook = request.body;
    const successResponse ={
        message:"I have added your data (show below) to my database (honest)",
        book:newBook
    }
    response.send(successResponse);
})

app.delete("/book", (request, response)=>{
    console.log(request.body);
    id = request.body.id;
    const successResponse ={
        message:"I have deleted record " + id + " from our database (no...really)",
        deletedRecord:id
    }
    response.send(successResponse);
})

