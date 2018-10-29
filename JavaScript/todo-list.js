

function makeTodo(todo) {
    const html = /*html*/`
        <li class="todo">
            <h3 class="name" style="background: ${todo.color};">
                ${todo.name}
            </h3>
            <button class="danger">X</button>
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const list = document.getElementById('list');

const todoList = {
    init(todos, onRemove) {
        for(let i = 0; i < todos.length; i++) {
            todoList.add(todos[i]);
        }
        todoList.onRemove = onRemove;
    },
    add(todo) {
        const dom = makeTodo(todo);
        const removeButton = dom.querySelector('button');
        const listItem = dom.querySelector('li');

        removeButton.addEventListener('click', function() {
            todoList.onRemove(todo);
            listItem.remove();
        });
        list.appendChild(dom);
    }
};

export default todoList;