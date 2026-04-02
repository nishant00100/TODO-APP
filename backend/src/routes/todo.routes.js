const express = require("express");
const { handleCreatingTodo, getTodo, updateTodo, deleteTodo } = require("../controllers/todo.controller");

const router = express.Router();

router.post("/", handleCreatingTodo);

module.exports = router;