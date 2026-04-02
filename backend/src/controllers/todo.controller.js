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
        return res.status(500).json({message : `todo creating error : ${error.message}`});
    }
}

async function getTodo(req, res){
    try{
        const todo = await TODO.find();
        res.status(200).json({data : todo});
    } catch(err){
        res.status(500).json({error : err.message});
    }
};

async function updateTodo(req, res){
    try{
        const  id = req.params.id;
        const updatedTodo = await TODO.findByIdAndUpdate(id, req.body);
        res.status(300).json({ message : "todo update", data : updateTodo});
    } catch(err){
        res.status(500).json({ error : err.message });
    }
};


async function deleteTodo(req, res){
    try{

        const id = req.params.id;
        const todo = await TODO.findByIdAndDelete(id);
        res.status(200).json({ message : "deleted successfully" })

    } catch(err){
        res.status(500).json({ error : err.message });
    }
}


module.exports = {
    handleCreatingTodo,
    getTodo,
    updateTodo,
    deleteTodo
}