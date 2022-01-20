function add() {

  let li = document.createElement("LI");
  let input_value = document.form_main.task.value;
  let input_text = document.createTextNode(input_value);
  input_value.id = "input"
 
  //checkbox
 
  let checkBox = document.createElement("span");
  checkBox.id = "check-icon";
  checkBox.className = "material-icons";
  let checkTxt = document.createTextNode("check_circle");
  checkBox.style.height = "24px";
  checkBox.style.color = "#DDDDDD";
  checkBox.appendChild(checkTxt);
  li.appendChild(checkBox);
  
  
  li.appendChild(input_text);
  document.querySelector("ul").appendChild(li);
  document.form_main.task.value = "";

  createButtons(li);
}

function createButtons(li) {
  let deleteButton = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  let editTaskButton = document.createElement("span");
  let editTaskTxt = document.createTextNode("edit");

  deleteButton.className = "close";
  deleteButton.id = "delete-btn"
  deleteButton.appendChild(txt);
  li.appendChild(deleteButton);

  // edit button
  editTaskButton.appendChild(editTaskTxt);
  li.appendChild(editTaskButton);
  editTaskButton.id = "edit-btn"

  deleteButton.onclick = () =>
    (deleteButton.parentElement.style.display = "none");
}




//completed task


let taskCompleted = document.getElementById("completed-tasks");
taskCompleted.hidden = true;
let completedTasksHolder = document.getElementById("completed-tasks");

document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    let item = e.target
    taskCompleted.hidden = false;
    document.getElementById("delete-btn").style.display = "none";
    document.getElementById("edit-btn").style.display = "none";
    document.getElementById("check-icon").style.color = "green"
    taskCompleted.appendChild(item)
    
  
 }
});
