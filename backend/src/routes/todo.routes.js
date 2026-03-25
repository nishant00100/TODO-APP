const express = require("express");
const { handleCreatingTodo } = require("../controllers/todo.controller");

const router = express.Router();

router.post("/", handleCreatingTodo);

module.exports = router;