import { useState, useEffect } from "react";
import classes from "./List.module.css";

function List() {
  // Handler to delete a task
  function deleteHandler(event) {
    const taskItem = event.target.parentElement.parentElement.textContent;

    let tasks;

    if (localStorage.getItem("tasks") === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.forEach((task, index) => {
      if (taskItem === task) {
        tasks.splice(index, 1);
      }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setLoadedTasks(tasks);
  }

  const [isLoading, setIsLoading] = useState(true);
  const [loadedTasks, setLoadedTasks] = useState([]);

  // Set the tasks to local storage
  useEffect(() => {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    setIsLoading(false);
    setLoadedTasks(tasks);
  }, [setIsLoading, setLoadedTasks]);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  if (loadedTasks.length === 0) {
    return <p>No Task To Show...</p>;
  }

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>All Todos</h1>
      <ul>
        {loadedTasks.map((task, id) => (
          <li key={id}>
            {task}
            <span className={classes.icon}>
              <i className="far fa-trash-alt" onClick={deleteHandler}></i>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
