const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

document.addEventListener('DOMContentLoaded', loadTasks);

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const taskText = input.value.trim();

    if (taskText !== '') {
        addTask(taskText, false);
        saveTask(taskText, false);
        input.value = '';
    }
});


function addTask(text, completed) {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = completed;

    const span = document.createElement('span');
    span.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Usuń';

    if (completed) {
        li.classList.add('completed');
    }

    checkbox.addEventListener('change', function() {
        li.classList.toggle('completed', checkbox.checked);
        updateLocalStorage();
    });

    deleteBtn.addEventListener('click', function() {
        li.remove();
        updateLocalStorage();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
}


function saveTask(text, completed) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ text, completed });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function updateLocalStorage() {
    const tasks = [];

    document.querySelectorAll('#task-list li').forEach(li => {
        const text = li.querySelector('span').textContent;
        const completed = li.querySelector('input').checked;

        tasks.push({ text, completed });
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(task => {
        addTask(task.text, task.completed);
    });
}