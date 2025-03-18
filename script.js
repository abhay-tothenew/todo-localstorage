document.addEventListener("DOMContentLoaded", loadTodos);

function addTodo() {
    const input = document.getElementById("todo-input");
    const todoText = input.value.trim();

    if (todoText === "") return;

    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(todoText);
    localStorage.setItem("todos", JSON.stringify(todos));

    input.value = "";
    loadTodos();
}

function loadTodos() {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";

    const todos = JSON.parse(localStorage.getItem("todos")) || [];

    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${todo} <button onclick="deleteTodo(${index})">❌</button>`;
        todoList.appendChild(li);
    });
}

function deleteTodo(index) {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    loadTodos();
}
