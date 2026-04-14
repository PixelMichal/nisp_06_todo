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

        // reakcja na zaznaczenie
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                li.classList.add('completed');
            } else {
                li.classList.remove('completed');
            }
        });

        li.appendChild(checkbox);
        li.appendChild(span);

        taskList.appendChild(li);

        input.value = '';
    }
});