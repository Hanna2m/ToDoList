function add() {
  let li = document.createElement("LI");
  let input_value = document.form_main.task.value;
  let input_text = document.createTextNode(input_value);

  li.appendChild(input_text);
  document.querySelector("ul").appendChild(li);
  document.form_main.task.value = "";

  createCloseButton(li);
}

function createCloseButton(li) {
  let deleteButton = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  let editTaskButton = document.createElement("span");
  let editTaskTxt = document.createTextNode("edit");

  deleteButton.className = "close";
  deleteButton.appendChild(txt);
  li.appendChild(deleteButton);

  // edit button
  editTaskButton.appendChild(editTaskTxt);
  li.appendChild(editTaskButton);

  deleteButton.onclick = () =>
    (deleteButton.parentElement.style.display = "none");
}

document.querySelectorAll("li").forEach(createCloseButton);
document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") e.target.classList.toggle("checked");
});
