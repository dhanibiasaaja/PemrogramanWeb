document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');

        li.innerHTML = `
            <span>${taskValue}</span>
            <div>
                <button class="edit-button" onclick="editTask(this)">Edit</button>
                <button class="delete-button" onclick="deleteTask(this)">Hapus</button>
            </div>
        `;

        taskList.appendChild(li);
        taskInput.value = '';
        taskInput.focus();
    } else {
        alert("Tugas tidak boleh kosong!");
    }
}

function deleteTask(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}

function editTask(button) {
    const li = button.parentElement.parentElement;
    const span = li.querySelector('span');
    const newTask = prompt('Edit tugas:', span.textContent);

    if (newTask !== null && newTask.trim() !== '') {
        span.textContent = newTask;
    } else if (newTask !== null) {
        alert("Tugas tidak boleh kosong!");
    }
}
