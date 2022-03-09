const async = require("hbs/lib/async");
const mongoose = require("mongoose");


const newuserSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email :{
        type : String,
        required: false
    },
    password : {
        type : String,
        required :true
    }
})

const newUser1 = mongoose.model("Registeruser" , newuserSchema);

module.exports = newUser1;