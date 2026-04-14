const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const taskText = input.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');

        // checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // tekst zadania
        const span = document.createElement('span');
        span.textContent = taskText;

        // przycisk usuń
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Usuń';

        // oznaczanie jako ukończone
        checkbox.addEventListener('change', function() {
            li.classList.toggle('completed', checkbox.checked);
        });

        // usuwanie zadania
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);

        input.value = '';
    }
});