import React from 'react';
import ReactDOM from 'react-dom';

const tasks = ['Take out the trace', 'walk the dog', 'Go and study']
const element = React.createElement('ol', null,
  tasks.map((task, index) => React.createElement('li', { key: index }, task))

);

ReactDOM.render(element, document.getElementById('root'));

