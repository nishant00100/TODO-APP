const express = require("express");

const app = require("./src/app");

const router = require("./src/routes/todo.routes");

const PORT = 8000;


const connectDB = require("./src/config/db");
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/todo", router);


app.listen(PORT, ()=>{
    console.log(`Server is running on port:${PORT}`);
})