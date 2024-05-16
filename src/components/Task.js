import React from "react";

const taskNameToId = (name) => {
  return `task-${name}`;
};
const Task = ({ name, setTaskName, stageId }) => {
  return (
    <div
      className="task"
      draggable
      style={{
        padding: "1rem",
        border: "1px solid #ccc",
        margin: "1rem 1rem 0 1rem",
      }}
      data-testid={taskNameToId(name)}
      onClick={() => setTaskName(name, stageId)}
    >
      {name}
    </div>
  );
};

export default Task;
