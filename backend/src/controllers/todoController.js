const Todo = require('../models/todo');

exports.getTodos = async (req, res) => {
  const todos = await Todo.find().sort({ createdAt: -1 });
  res.json(todos);
};

exports.createTodo = async (req, res) => {
  const { title, priority } = req.body;
  const todo = new Todo({ title, priority });
  await todo.save();
  res.status(201).json(todo);
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.status(204).end();
};

exports.toggleTodo = async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);
  if (!todo) return res.status(404).json({ message: 'Not found' });
  todo.completed = !todo.completed;
  await todo.save();
  res.json(todo);
};

exports.health = async (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
};
