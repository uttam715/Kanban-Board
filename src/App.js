import React, { Component } from "react";
import "./App.css";
import { cloneDeep, findIndex } from "lodash";

import Controls from "./components/Controls";
import Board from "./components/Board";

const NUM_STAGES = 4;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { name: "task 0", stage: 0 },
        { name: "task 1", stage: 0 },
        { name: "task 2", stage: 0 },
        { name: "task 3", stage: 0 },
        { name: "task 4", stage: 1 },
        { name: "task 5", stage: 1 },
        { name: "task 6", stage: 1 },
        { name: "task 7", stage: 2 },
        { name: "task 8", stage: 2 },
        { name: "task 9", stage: 3 },
      ],

      selectedTask: null,
      containerStage: null,
    };
    this.stagesNames = ["Backlog", "To Do", "Ongoing", "Done"];
  }

  setTaskName = (name, stageName) => {
    this.setState({
      selectedTask: name,
      containerStage: stageName,
    });
  };

  // takes direction as a string
  // decides where to place or move the task next

  moveStage = (direction) => {
    let selectedTask = cloneDeep(this.state.selectedTask);
    let tasks = cloneDeep(this.state.tasks);
    let containerStage = cloneDeep(this.state.containerStage);
    // let taskIndex = findIndex(tasks, (task) => {
    //   return task.name === selectedTask;
    // });
    let decidedStage = this.decideStage(direction, containerStage);
    if (decidedStage !== null && decidedStage !== undefined) {
      tasks.forEach(task => {
        if(task.name ===selectedTask){
          task.stage= decidedStage
        }
      })
      // tasks.splice(taskIndex, 1);
      this.setState({
        tasks,
        containerStage: decidedStage,
      });
    }
  };

  // decides the next stage
  // takes the direction as a string and containerStage as a number
  // returns next stage as a number

  decideStage = (direction, containerStage) => {
    switch (direction) {
      case "forward":
        if (containerStage === 3) {
          console.log("cannot move forward");
          return;
        }
        return containerStage + 1;

      case "backward":
        if (containerStage === 0) {
          console.log("cannot move backward");
          return;
        }
        return containerStage - 1;

      default:
        return;
    }
  };

  render() {
    const { tasks } = this.state;

    let stagesTasks = [];
    for (let i = 0; i < NUM_STAGES; ++i) {
      stagesTasks.push([]);
    }

    for (let task of tasks) {
      const stageId = task.stage;
      stagesTasks[stageId].push(task);
    }

    return (
      <div className="App">
        <Controls
          moveStage={this.moveStage}
          containerStage={this.state.containerStage}
          selectedTask={this.state.selectedTask}
        />
        <Board
          stagesTasks={stagesTasks}
          stagesNames={this.stagesNames}
          setTaskName={this.setTaskName}
        />
      </div>
    );
  }
}

export default App;
