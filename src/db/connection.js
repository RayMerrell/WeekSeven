const mongoose = require("mongoose");
const connection = async () =>{
    try{
        await mongoose.connect(
            process.env.MONGO_URI
        );
    }catch(e){
        console.log(e);
    }
    console.log("Connection established");
}
connection();
