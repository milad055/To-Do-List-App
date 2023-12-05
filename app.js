document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
    taskList.addEventListener('click', handleTaskClick);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = createTaskElement(taskText);
        taskList.appendChild(li);

        taskInput.value = '';
        taskInput.focus();
    }

    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox">
            <span class="task-text">${taskText}</span>
            <button class="delete">Delete</button>
        `;
        return li;
    }

    function handleTaskClick(event) {
        const target = event.target;
        if (target.tagName === 'INPUT') {
            toggleTaskCompletion(target);
        } else if (target.classList.contains('delete')) {
            deleteTask(target.closest('li'));
        }
    }

    function toggleTaskCompletion(checkbox) {
        const taskText = checkbox.nextElementSibling;
        taskText.classList.toggle('completed', checkbox.checked);
    }

    function deleteTask(li) {
        taskList.removeChild(li);
    }
});
