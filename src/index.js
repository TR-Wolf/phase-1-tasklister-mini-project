// your code here
//from the instructions:

// This is copied directly from the instructions
// listen for a submit event on the <form> element.

// 1. get the <form> element
const form = document.getElementById("create-task-form")

// 1B. (maybe get task description)
// const taskDescription = document.getElementById("new-task-description")

// Extra, we will need the submit button
// const submitButton = document.getElementById("new-task-submit")

// 2. Add click event listener to submit button
// const onClick = (event) => {
//   event.preventDefault()
//   console.log("the button has been clicked")
// }

// submitButton.addEventListener("click", onClick)

// 2. Add submit event listener to the whole form
const onSubmit = (event) => {
  event.preventDefault()

  //save the description to a variable
  const desc = event.target.description.value

  //Add task to todolist
  renderTask(desc)

  //clear the description
  // event.target.description.value = ""
  // event.target.reset()
  form.reset()
}

form.addEventListener("submit", onSubmit)

// const taskDescriptionFromForm = form["new-task-description"]


function renderTask (taskDescription){
  // Create A Task
  // 1. create an li
  const li = document.createElement("li")

  // 2. set the text of the li to have the taskDesc
  li.innerText = taskDescription
  
  //create a button with the text "X"
  const delButton = document.createElement("button")
  delButton.innerText = "X"

  //lets make the delete button actually work
  delButton.addEventListener("click", (e) => {
    li.remove()
  })
  li.append(delButton)
  //append a completed task to the task list
  // 1. get the task list
  const taskList = document.getElementById("tasks")

  // 2. append the new task to the task list
  taskList.append(li)
}

