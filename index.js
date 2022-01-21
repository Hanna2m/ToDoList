function add() {
  // add button text change back to add
  document.getElementById("addBtn").innerHTML = "add";
  document.getElementById("task").placeholder = "Add your task";
  document.getElementById("task").style.border = "";

  let li = document.createElement("LI");
  let textBlock = document.createElement("div")
  textBlock.className = "task-text";
  let input_value = document.form_main.task.value;
  let input_text = document.createTextNode(input_value);
  input_value.id = "input";
  textBlock.appendChild(input_text);

  

  //checkbox

  let checkBox = document.createElement("span");
  checkBox.id = "check-icon";
  checkBox.className = "material-icons";
  let checkTxt = document.createTextNode("check_circle");
  checkBox.style.height = "24px";
  checkBox.style.color = "#DDDDDD";
  checkBox.appendChild(checkTxt);
  li.appendChild(checkBox);

  li.appendChild(textBlock);
  document.querySelector("ul").appendChild(li);
  document.form_main.task.value = "";

  // edit button
  let editTaskButton = document.createElement("span");
  editTaskButton.id = "edit-btn";
  editTaskButton.className = "material-icons";
  let editTxt = document.createTextNode("edit");
  editTaskButton.style.height = "24px";
  editTaskButton.style.color = "3A002D";
  editTaskButton.appendChild(editTxt);
  li.appendChild(editTaskButton);

  //delete Btn
  let deleteButton = document.createElement("SPAN");
  deleteButton.className = "material-icons";
  let txt = document.createTextNode("delete");
  deleteButton.id = "delete-btn";
  deleteButton.style.height = "24px";
  deleteButton.style.color = "red";
  deleteButton.appendChild(txt);
  li.appendChild(deleteButton);

  //delete task
  deleteButton.addEventListener(
    "click",
    (e) => (e.target.parentElement.style.display = "none")
  );

  // edit task
  editTaskButton.onclick = (e) => {
    let editText = document.getElementsByName("task")[0];
    console.log(input_value);
    editText.placeholder = input_value;
    e.target.parentElement.classList.add("hidden");
    document.getElementById("addBtn").innerHTML = "edit";
    document.getElementById("task").style.border = "3px solid #adff2fab";
  };

  //adding press enter functionality
  document.getElementById("task").addEventListener("keypress", function (e) {
    if (e.keyCode === 13 || e.which === 13) {
      e.preventDefault();
      add();
      return false;
    }
  });
  //end press enter functionality

  //completed task

 
  let taskCompleted = document.getElementById("completed-tasks");
  // document.querySelector("ul").addEventListener("click", (e) => {
  document.querySelector("li").addEventListener("click", (e) => {
    // if (e.target.tagName === "LI") {
      let item = e.target.parentElement;
      console.log(item);
      document.getElementById("delete-btn").style.display = "none";
      document.getElementById("edit-btn").style.display = "none";
      document.getElementById("check-icon").style.color = "green";
      taskCompleted.appendChild(item);

      return li;
  })
}
