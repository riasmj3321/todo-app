const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const pendingCount = document.getElementById("pendingCount");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskItem = document.createElement("li");
    const taskTextSpan = document.createElement("span");
    taskTextSpan.textContent = taskText;

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Completada";
    completeBtn.classList.add("complete-btn");

    completeBtn.addEventListener("click", () => {
      taskTextSpan.classList.toggle("completed");
      updatePendingCount();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", () => {
      taskItem.remove();
      updatePendingCount();
    });

    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(completeBtn);
    taskItem.appendChild(deleteBtn);

    taskList.appendChild(taskItem);
    taskInput.value = "";

    updatePendingCount();
  }
});

function updatePendingCount() {
  const tasks = document.querySelectorAll("#taskList li");
  let count = 0;

  tasks.forEach((task) => {
    if (!task.querySelector("span").classList.contains("completed")) {
      count++;
    }
  });

  pendingCount.textContent = count;
}
