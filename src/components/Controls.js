import React, { Component } from 'react';

class Controls extends Component {
  render() {
    return (
      <div style={{ padding: '1rem', background: '#D6F3FF' }}>
        <h1>Controls</h1>
        <div style={{ display: 'flex', marginTop: '1rem' }}>
          <input
            readOnly
            value={this.props.selectedTask}
            placeholder="Selected task name"
            style={{ fontSize: '1rem' }}
            data-testid="selected-task-field"
          />
          <button
            className='button'
            style={{ marginLeft: '1rem' }}
            disabled={this.props.containerStage === null || this.props.containerStage === 0}
            data-testid="move-back-btn"
            onClick={() => this.props.moveStage('backward')}
          >
            Move back
          </button>
          <button
            className="button"
            style={{ marginLeft: '1rem' }}
            disabled={this.props.containerStage === null || this.props.containerStage === 3}
            data-testid="move-forward-btn"
            onClick={() => this.props.moveStage('forward')}
          >
            Move forward
          </button>
        </div>
      </div>
    )
  }
}

export default Controls;
