document.addEventListener("DOMContentLoaded", function() {
    var newTaskButton = document.querySelector(".new-task-button");
    var taskList = document.getElementById("task-list");
  
    newTaskButton.addEventListener("click", function() {
      var taskInput = prompt("Digite a nova tarefa:");
      if (taskInput) {
        var listItem = document.createElement("li");
        listItem.textContent = taskInput;
  
        var removeButton = document.createElement("button");
        removeButton.textContent = "Remover";
        removeButton.classList.add("remove-task-button");
  
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
      }
    });
  
    taskList.addEventListener("click", function(event) {
      if (event.target.classList.contains("remove-task-button")) {
        var listItem = event.target.parentNode;
        taskList.removeChild(listItem);
      }
    });
  });