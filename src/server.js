const express=require("express");
const app = express();

app.use("/books", express.static("books"));
//app.use("/", express.static("anotherRoute"));
app.use("/MyRoute", express.static("myRoute"));

app.listen(5001, ()=>console.log("Server is listening"));

