import React, { useState } from "react";

function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName && taskDescription) {
      addTask({
        id: Date.now(),
        name: taskName,
        description: taskDescription,
        completed: false,
      });
      setTaskName("");
      setTaskDescription("");
    }
    localStorage.setItem("username", taskName);
    const username = localStorage.getItem("username");

    console.log(username); // Outputs: 'john_doe'
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
