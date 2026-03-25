const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    description : {
        type: String,
        required : true,
    },},

    { timestamps : true, },

)

const TODO = mongoose.model("Todo", todoSchema);
module.exports = TODO;