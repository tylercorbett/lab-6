const addTodo = {
    init(onAdd) {
        const form = document.getElementById('add-form');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const elements = form.elements;
            const todo = {
                name: elements.name.value,
                date: elements.date.value
            };
            onAdd(todo);
            form.reset();
            document.getElementById.blur();
        });
    }
};

export default addTodo;