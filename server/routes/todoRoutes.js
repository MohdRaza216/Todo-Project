import express from "express";
import Todo from "../models/Todo.js";

const router = express.Router();

// TODO: Get all todos
router.get("/", async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch todos" });
    }
});

// TODO: Create a new todo
router.post("/", async (req, res) => {
    try {
        const newTodo = new Todo({
            task: req.body.task,
        });
        const savedTodo = await newTodo.save();
        res.json(savedTodo);
    } catch (err) {
        res.status(500).json({ error: "Failed to create todo" });
    }
});

// TODO: Update a todo
router.put("/:id", async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            { completed: req.body.completed },
            { new: true }
        );
        res.json(updatedTodo);
    } catch (err) {
        res.status(500).json({ error: "Failed to update todo" });
    }
});

// TODO: Delete a todo
router.delete("/:id", async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        res.json(deletedTodo);
    } catch (err) {
        res.status(500).json({ error: "Failed to delete todo" });
    }
});

export default router;
