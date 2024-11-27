function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement('li');
        li.textContent = taskText;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            li.remove();
        };

        const completeButton = document.createElement('button');
        completeButton.textContent = "Complete";
        completeButton.onclick = function() {
            li.classList.toggle('completed');
        };

        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        document.getElementById('taskList').appendChild(li);
        
        taskInput.value = "";
    }
}
