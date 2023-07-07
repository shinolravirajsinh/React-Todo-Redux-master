import React from 'react';
import { connect } from 'react-redux';
import { addTask, removeTask } from '../actions';

function ToDoList(props) {
  const { tasks, addTask, removeTask } = props;

  function handleAddTask(event) {
    event.preventDefault();
    const taskInput = event.target.elements.task;
    addTask({
      id: Date.now(),
      text: taskInput.value,
      completed: false
    });
    taskInput.value = '';
  }

  function handleRemoveTask(task) {
    removeTask(task);
  }

  return (
    <div>
      <form onSubmit={handleAddTask}>
        <input type="text" name="task" />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleRemoveTask(task)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

const mapDispatchToProps = {
  addTask,
  removeTask
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList); 


