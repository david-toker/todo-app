import React from 'react';
import './App.css';
import TodoList from './components/todo-list/todo-list';
import SearchPanel from './components/search-panel/search-panel';

const todoData = [
  {label: 'to do lessons', important: true, id: 1},
  {label: 'to do sport', important: false, id: 2},
  {label: 'to find new job', important: false, id: 3}
]

const App = () => {
  return (
    <div>
      <SearchPanel/>
      <TodoList todos={todoData}/>
    </div>
  );
}

export default App;
