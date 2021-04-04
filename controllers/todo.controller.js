const { Todo } = require("../models/todo.model");

/**
 * @desc  Register Todo
 */

const todoRegister = async (req, res, next) => {
  let todoInfo = req.body;
  try {
    const todo = await new Todo(todoInfo).save();
    res.status(201).json({
      success: true,
      data: todo,
    });
  } catch (err) {
    logger.info(err);
    next(err);
  }
};

/**
 * @desc get all todos
 */

const getTodos = async (req, res, next) => {
  try {
    let todos = await Todo.find();
    if (todos.length > 0) {
      return res.status(200).json({
        success: true,
        data: todos,
      });
    } else {
      return res.status(404).json({
        success: false,
        error: "No todos to show",
      });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

/**
 * @desc update todo status
 */

const updateTodo = async (req, res, next) => {
  try {
    const _id = req.params.id;

    let todo = await Todo.findById({ _id });
    let done = !todo.done;
    let updatedTodo = await Todo.findByIdAndUpdate(
      { _id },
      { done },
      { new: true }
    );
    return res.status(201).json({
      success: true,
      data: updatedTodo,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

/**
 * @desc delete todo by id
 */

const deleteTodo = async (req, res, next) => {
  try {
    const _id = req.params.id;
    let todo = await Todo.findById({ _id });
    if (todo) {
      const deletedTodo = await Todo.findByIdAndDelete({ _id });
      return res.status(201).json({
        success: true,
        data: deletedTodo,
      });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = { todoRegister, getTodos, updateTodo, deleteTodo };
