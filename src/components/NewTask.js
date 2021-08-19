import NewTaskForm from "./NewTaskForm";

function NewTaskPage() {
  // Adding the task to local storage
  function addTaskHandler(task) {
    let tasks;
    // Check if any task exist and if not then create an array named tasks
    if (localStorage.getItem("tasks") === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  return (
    <section>
      <NewTaskForm onAddTask={addTaskHandler} />
    </section>
  );
}

export default NewTaskPage;
