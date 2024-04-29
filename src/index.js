import React from 'react';
import ReactDOM from 'react-dom';

const tasks = ['Take out the trace', 'walk the dog', 'Go and study']
const element =
  <div>
    <h1>Task List</h1>
    <ol>
      {tasks.map((task, index) => <li key={index}>{task}</li>)}

    </ol>
  </div>
ReactDOM.render(element, document.getElementById('root'));

