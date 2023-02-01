const TodoList = require("./TodoList");

const todoList = new TodoList();
console.log(todoList.todos.length === 0);

todoList.createTodo({
  id: 0,
  content: "hello world",
  completed: false,
  category: "Todo",
  tags: ["hi"],
});
let todo = todoList.findById(0);
console.log(todo.id === 0);
console.log(todo.content === "hello world");
console.log(todo.completed === false);
console.log(todo.category === "Todo");
console.log(todo.tags.length === 1);

todoList.createTodo({
  id: 1,
  content: "hello world",
  completed: false,
  category: "Todo",
  tags: ["hi"],
});

try {
  todoList.createTodo({
    id: 0,
    content: "    ",
    completed: false,
    category: "Todo",
  });
} catch (e) {
  console.log(true);
}

todoList.updateTodo({
  id: 0,
  content: "hi",
  completed: true,
  category: "Done",
  tags: ["hello world", "haha"],
});
todo = todoList.findById(0);
console.log(todo.content === "hi");
console.log(todo.completed);
console.log(todo.category === "Done");
console.log(todo.tags.toString() === "hello world,haha");

todoList.updateTodoTag({ id: 0, tagIndex: 0, tag: "hi" });
todo = todoList.findById(0);
console.log(todo.tags[0] === "hi");

todoList.deleteTag(0, 1);
todo = todoList.findById(0);
console.log(todo.tags.toString() === "hi,");

todoList.deleteAllTag(0);
todo = todoList.findById(0);
console.log(todo.tags.toString() === "");

todoList.deleteTodo(0);
console.log(todoList.todos.length === 1);

todoList.resetTodo();
console.log(todoList.todos.length === 0);
