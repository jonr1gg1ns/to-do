 export class ToDo {
    constructor(name = '', date = '', description = '', priority = '') {
        this.name = name;
        this.date = date;
        this.description = description;
        this.priority = priority;
        this.popup = document.createElement("div")
        this.popup.classList.add("todo-popup")

        this.popup.style.display = "none"; 


        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.placeholder = "Task Name";
        nameInput.id = "name"
        nameInput.classList.add("todo-item")
        nameInput.value = name
        this.popup.appendChild(nameInput)


        const dateInput = document.createElement("input")
        dateInput.type = "date";
        dateInput.placeholder = "Due Date";
        dateInput.id = "date";
        dateInput.classList.add("todo-item");
        dateInput.value = date
        this.popup.appendChild(dateInput);


        const todoDescription = document.createElement("textarea");
        todoDescription.placeholder = "Description";
        todoDescription.id = "description"
        todoDescription.value = description;
        todoDescription.classList.add("todo-item")


        this.popup.appendChild( todoDescription);
        const prioritySelector = document.createElement("select")
        const priorities = ["High", "Medium", "Low"];
        priorities.forEach(priority => {
            const option = document.createElement("option");
            option.value = priority;
            option.textContent = priority;
            prioritySelector.appendChild(option);
        });        
        prioritySelector.id = "priority";
        prioritySelector.classList.add("todo-item");
        prioritySelector.value = priority
        this.popup.appendChild(prioritySelector)


        const submitButton = document.createElement("button")
        submitButton.type = "submit";
        submitButton.id = "submit-button"
        submitButton.classList.add("todo-item")
        submitButton.textContent = "Add Task";
        this.popup.appendChild(submitButton)
        submitButton.addEventListener("click", (event) => { 
            event.preventDefault();

        const taskName = nameInput.value;
        const dueDate = dateInput.value;
        const taskDescription = todoDescription.value;
        const taskPriority = prioritySelector.value;
      

        const newTask = new ToDo(taskName,dueDate,taskDescription,taskPriority)
        ToDo.saveTask(newTask);
        this.hide();  
 });

        const closeButton = document.createElement("button");
        closeButton.textContent = "Close";
        closeButton.classList.add("close-button");
        this.popup.appendChild(closeButton);
        closeButton.addEventListener("click", () => this.hide());

        document.body.appendChild(this.popup); 
    }

    show() {
        this.popup.style.display = "block";
    }

    hide() {
        this.popup.style.display = "none";
    }
    static saveTask(task) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push({
            name: task.name,
            date: task.date,
            description: task.description,
            priority: task.priority,
        }); 
        localStorage.setItem('tasks', JSON.stringify(tasks));
}
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.textContent = `${task.name} - ${task.date} - ${task.priority}`;
        mainBar.appendChild(taskElement);
    });
}
