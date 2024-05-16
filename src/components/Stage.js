import React from "react";

import Task from "./Task";

const Stage = ({ name, stageId, tasks, setTaskName, changeTaskStage }) => {
  function handleDrop(e) {
    e.preventDefault();
    const dropData = JSON.parse(e.dataTransfer.getData("task"));
    if (stageId === dropData.stageId) return;
    changeTaskStage(dropData, stageId);
  }
  return (
    <div
      data-testid={`stage-${stageId}`}
      style={{
        flexGrow: 1,
        margin: "1rem",
        paddingBottom: "1rem",
        background: "#fafafa",
      }}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <h2>{name}</h2>
      <div>
        {tasks.map((task) => (
          <Task
            key={task.name}
            name={task.name}
            stageId={task.stage}
            setTaskName={setTaskName}
          />
        ))}
      </div>
    </div>
  );
};

export default Stage;
