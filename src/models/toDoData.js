const mongoose = require("mongoose")

const ToDoSchema = mongoose.Schema({
    ToDo:{
        type: String,
    }
})

const ToDoWork = mongoose.model("Todohistory", ToDoSchema)

module.exports = ToDoWork;