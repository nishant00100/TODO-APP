const TODO = require("../models/todo.model");


async function handleCreatingTodo(req, res){
    const { title, description } = req.body;

    try{
        const todo = await TODO.create({
            title,
            description,
        })

        return res.status(201).json({message : "created successfully"});
    } catch(error){
        return res.status(500).json({message : `todo creating error : ${error}`});
    }
}


module.exports = {
    handleCreatingTodo,
}