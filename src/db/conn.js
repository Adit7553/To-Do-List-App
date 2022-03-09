const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/to-do-list", {
    useNewUrlParser:true,
    useUnifiedtopology:true
}).then(()=>{
    console.log("Connection successfull with database");
}).catch((err)=>{
    console.log(`There is a problem while connecting to the database, error : ${err}`)
})