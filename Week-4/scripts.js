document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    const saveToLocalStorage = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    const renderTodos = () => {
        todoList.innerHTML = '';
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.className = todo.completed ? 'completed' : '';
            li.innerHTML = `
                <span>${todo.text}</span>
                <div>
                    <button class="edit-btn" data-index="${index}">Edit</button>
                    <button class="delete-btn" data-index="${index}">Delete</button>
                </div>
            `;
            li.addEventListener('click', () => {
                todo.completed = !todo.completed;
                saveToLocalStorage();
                renderTodos();
            });
            todoList.appendChild(li);
        });
    };

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTodo = { text: todoInput.value, completed: false };
        todos.push(newTodo);
        saveToLocalStorage();
        renderTodos();
        todoInput.value = '';
    });

    todoList.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit-btn')) {
            const index = e.target.getAttribute('data-index');
            const newText = prompt('Edit your task:', todos[index].text);
            if (newText) {
                todos[index].text = newText;
                saveToLocalStorage();
                renderTodos();
            }
        }
        if (e.target.classList.contains('delete-btn')) {
            const index = e.target.getAttribute('data-index');
            todos.splice(index, 1);
            saveToLocalStorage();
            renderTodos();
        }
    });

    renderTodos();
});
