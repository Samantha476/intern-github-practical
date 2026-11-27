// Intern Task Manager - task logic

const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const completedList = document.getElementById("completed-list");
const emptyMsg = document.getElementById("empty-msg");
const completedEmpty = document.getElementById("completed-empty");

const statTotal = document.getElementById("stat-total");
const statCompleted = document.getElementById("stat-completed");
const statPending = document.getElementById("stat-pending");

let tasks = [];

function renderDashboard() {
  const total = tasks.length;
  const completed = tasks.filter(function (t) { return t.done; }).length;
  statTotal.textContent = total;
  statCompleted.textContent = completed;
  statPending.textContent = total - completed;
}

function render() {
  taskList.innerHTML = "";
  completedList.innerHTML = "";

  tasks.forEach(function (task) {
    const li = document.createElement("li");
    li.className = "task-item" + (task.done ? " done" : "");

    const span = document.createElement("span");
    span.textContent = task.name;

    const actions = document.createElement("span");
    actions.className = "actions";

    if (!task.done) {
      const doneBtn = document.createElement("button");
      doneBtn.type = "button";
      doneBtn.textContent = "Complete";
      doneBtn.addEventListener("click", function () {
        task.done = true;
        render();
      });
      actions.appendChild(doneBtn);
    }

    const delBtn = document.createElement("button");
    delBtn.type = "button";
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", function () {
      tasks = tasks.filter(function (t) {
        return t.id !== task.id;
      });
      render();
    });
    actions.appendChild(delBtn);

    li.appendChild(span);
    li.appendChild(actions);

    if (task.done) {
      completedList.appendChild(li);
    } else {
      taskList.appendChild(li);
    }
  });

  emptyMsg.style.display = tasks.some(function (t) { return !t.done; }) ? "none" : "";
  completedEmpty.style.display = tasks.some(function (t) { return t.done; }) ? "none" : "";
  renderDashboard();
}

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = taskInput.value.trim();
  if (!name) return;

  tasks.push({
    id: Date.now(),
    name: name,
    done: false
  });

  taskInput.value = "";
  render();
});

render();
