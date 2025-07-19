let tasks = [];

const addTask = () => {
  const task_input = document.getElementById("TaskInput");
  const text = task_input.value.trim();

  if (text) {
    tasks.push({ text: text, completed: false });
    task_input.value = "";
    updateTasksList();
  }
};

const toggleTaskcomplete = (index) => {
  tasks[index].completed = !tasks[index].completed;
  updateTasksList(); // <- critical //i was debugging and forgot top add 25 min wasted
};

const deleteTask=(index)=> {
    tasks.splice(index,1);
    updateTasksList();
}

const editTask= (index)=>{
    const task_input=document.getElementById('TaskInput')
    TaskInput.value=tasks[index].text

    tasks.splice(index,1)
    updateTasksList()
};
const updatestats=()=>{
    const completeTasks = tasks.filter(tasks=>task.completed).length
    const totalTask=tasks.length
    const progress=(completeTasks/totalTask)*100;
    const progressBar=document.getElementById('progress_bar');

    progressBar.style.windows=`${progress}%`
}

const updateTasksList = () => {
  const tasklist = document.getElementById("Duty-List");
  tasklist.innerHTML = "";

  tasks.forEach((task, index) => {
    const list_item = document.createElement("li");

    list_item.innerHTML = `
      <div class="taskItem">
        <div class="task ${task.completed ? "completed" : ""}">
          <input type="checkbox" class="checkbox" ${
            task.completed ? "checked" : ""
          }/>
          <p>${task.text}</p>
        </div>
        <div class="icons">
         <i class="fa-solid fa-pen-to-square" onclick="editTask(${index})"></i>
         <i class="fa-solid fa-trash" onclick="deleteTask(${index})"></i>
        </div>
      </div>
    `;

    list_item
      .querySelector(".checkbox")
      .addEventListener("change", () => toggleTaskcomplete(index));

    tasklist.append(list_item);
  });
};

document.getElementById("newTask").addEventListener("click", function (e) {
  e.preventDefault();
  addTask();
});

