// Inisialisasi elemen
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Fungsi untuk menambahkan tugas
addTaskBtn.addEventListener("click", function() {
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Buat elemen list item baru
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = taskText;
    li.appendChild(span);

    // Tombol hapus
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    // Tombol edit
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", function() {
        const newTaskText = prompt("Edit your task:", span.textContent);
        if (newTaskText !== null && newTaskText.trim() !== "") {
            span.textContent = newTaskText;
        } else {
            alert("Task cannot be empty!");
        }
    });

    // Tambahkan tombol hapus dan edit ke item list
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    // Tambahkan item ke task list
    taskList.appendChild(li);

    // Kosongkan input
    taskInput.value = "";
});
