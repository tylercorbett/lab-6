import todoApi from './todo-api.js';
import todoList from './todo-list.js';
import addTodo from './add-todo.js';

const todos = todoApi.getAll();

todoList.init(todos, function(todo) {
    todoApi.remove(todo);
});

addTodo.init(function(todo) {
    todoApi.add(todo);
    todoList.add(todo);
});
