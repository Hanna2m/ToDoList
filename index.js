function add() {
  let li = document.createElement("LI");
  let input_value = document.form_main.task.value;
  let input_text = document.createTextNode(input_value);

  li.appendChild(input_text);
  document.querySelector("ul").appendChild(li);
  document.form_main.task.value = "";

  createCloseButton(li);
}

//adding press enter functionality
document.getElementById('task').addEventListener('keypress', function (e) {
  if (e.keyCode === 13 || e.which === 13) {
      e.preventDefault();
      add();
      return false;
  }
});
//end press enter functionality

function createCloseButton(li) {
  let deleteButton = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  let editTaskButton = document.createElement("span");
  let editTaskTxt = document.createTextNode("edit");

  deleteButton.className = "close";
  deleteButton.appendChild(txt);
  li.appendChild(deleteButton);

  // edit button
  editTaskButton.className = "edit";
  editTaskButton.appendChild(editTaskTxt);
  li.appendChild(editTaskButton);

  deleteButton.onclick = () =>
    (deleteButton.parentElement.style.display = "none");

  editTaskButton.onclick = (e) => {
    console.log("edit button clicked");

    e.target.parentElement.classList.add("label");
    // when user clicks edit:
    // assign current value of the list item to a variable
    // console.log(e.target.parentElement);

    let listItems = document.querySelectorAll(".label");
    // console.log(e.target.parentElement.innerText);
    // console.log(listItems);
    listItems.forEach((element) => {
      console.log(element);
      if (element === e.target) {
        console.log("targeted");
      }
    });

    // show input box and allow edit
    // edit button changes to save button
    // when user clicks save button;
    // updated item appears in list
    // save button changes to edit button
  };
}

document.querySelectorAll("li").forEach(createCloseButton);
document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") e.target.classList.toggle("checked");
});
