// be able to type a task into the input field
// be able to click some form of a submit button
// see the task string that was typed appear in the DOM after submit clicked

// const { regexpDot } = require("jshint/src/reg");

// const todo = document.querySelector("#new-task-description").value;

const form = document.querySelector("form");
const taskLIst = document.querySelector("#tasks");

document.addEventListener("DOMContentLoaded", () => {
  // add event listener to form for submit (callback)
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // create a todo using input value, pass into buildTodo function
    let todo = event.target["new-task-description"].value;
    buildTodo(todo);

    form.reset();
  });
});

// function to create & attach task to DOM
function buildTodo(todo) {
  let li = document.createElement("li");
  li.textContent = todo;
  // li.classList.add = "todo";

  console.log(todo);

  // create delete button
  let deleteBtn = document.createElement("btn");
  deleteBtn.textContent = "x";
  deleteBtn.classList.add("delete");
  deleteBtn.addEventListener("click", (event) => {
    deleteTodo(event);
  });

  // add dropdown menu for priority

  // let dropDiv = document.createElement("div");
  // let dropBtn = document.createElement("btn");
  // dropBtn.classList.add("dropdown-content");
  // dropBtn.textContent = "select priority";

  // dropDiv.appendChild(dropBtn);

  // li.appendChild(dropDiv);

  // #region using select tag for priority options
  // let dropMenu = document.createElement("select");
  // let dropchoice1 = document.createElement("option");
  // dropchoice1.classList.add("red");
  // dropchoice1.textContent = "high";
  // let dropchoice2 = document.createElement("option");
  // dropchoice2.classList.add("yellow");
  // dropchoice2.textContent = "medium";
  // let dropchoice3 = document.createElement("option");
  // dropchoice3.classList.add("green");
  // dropchoice3.textContent = "low";

  // dropMenu.appendChild(dropchoice1);
  // dropMenu.appendChild(dropchoice2);
  // dropMenu.appendChild(dropchoice3);
  // #endregion

  const dropMenu = document.createElement("select");
  dropMenu.classList.add = "dropMenu";

  // need to set default value for dropMenu

  const propertyObj = {
    "Very High": "rgb(233, 6, 67)",
    High: "rgb(233, 6, 233)",
    Medium: "rgb(120, 6, 233)",
    Low: "rgb(5, 110, 237)",
    "Very Low": "rgb(6, 229, 233)",
  };

  for (prop in propertyObj) {
    let dropChoice = document.createElement("option");
    dropChoice.textContent = prop;
    dropChoice.classList.add = "dropChoice";
    dropChoice.setAttribute("value", propertyObj[prop]);
    dropMenu.appendChild(dropChoice);
  }

  dropMenu.addEventListener("change", (e) => {
    console.log(e.target.value);
    e.target.parentNode.style.color = e.target.value;
  });

  li.appendChild(dropMenu);
  li.appendChild(deleteBtn);
  taskLIst.appendChild(li);
}

// STRETCH DELIVERABLES
// A delete function that will remove tasks from your list

function deleteTodo(event) {
  event.target.parentNode.remove();
}

// DONE A priority value selected from a dropdown that is used to determine the color of the text in the list
//  (e.g. red for high priority, yellow for medium, green for low)

function changeColor(element) {
  // let newColor
  // element.
  // event.target.parentNode.
}
// DONE As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority

// An additional input field (e.g. user, duration, date due)

// Ability to edit tasks

// Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM
