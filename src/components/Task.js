import React from "react";

const taskNameToId = (name) => {
  return `task-${name}`;
};

const Task = ({ name, setTaskName, stageId }) => {
  const handleDragStart = (e) => {
    const dragData = { name: name, stageId: stageId };
    e.dataTransfer.setData("task", JSON.stringify(dragData));
  };

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
      onDragStart={handleDragStart}
      onClick={() => setTaskName(name, stageId)}
    >
      {name}
    </div>
  );
};

export default Task;
