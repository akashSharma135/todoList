import { useRef } from "react";
import classes from "./NewTask.module.css";

// Form Component
function NewTaskForm(props) {
  // reference Of input
  const taskInputRef = useRef();

  // Handler for submit button
  function submitHandler() {
    const enteredTask = taskInputRef.current.value;
    props.onAddTask(enteredTask);
  }
  return (
    <div className={classes.card}>
      <form onSubmit={submitHandler}>
        <h1 className={classes.title}>Add New Todo</h1>
        <div className={classes.input}>
          <input
            type="text"
            name="task"
            placeholder="Enter Task"
            autoComplete="off"
            ref={taskInputRef}
          />
          <small className={classes.helperText}>
            What are your today's plans?
          </small>
        </div>
        <button type="submit" className={classes.addBtn}>
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default NewTaskForm;
