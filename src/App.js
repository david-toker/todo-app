import React, { Component } from 'react';
import './App.css';
import TodoList from './components/todo-list/todo-list';
import SearchPanel from './components/search-panel/search-panel';
import ItemStatusFilter from './components/item-status-filter/item-status-filter';




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoData: [
        {label: 'to do lessons', important: true, id: 1},
        {label: 'to do sport', important: false, id: 2},
        {label: 'to find new job', important: false, id: 3}
      ]
    }
  }


  deleteItem = (id) => {
    this.setState((state) => {
      const idx = state.todoData.findIndex(el=>el.id===id);
      const newArr = [...state.todoData.slice(0, idx), ...state.todoData.slice(idx+1)];
      return {
        todoData: newArr
      };
    });
  };

  render () {
    return (
      <div>
        <SearchPanel/>
        <ItemStatusFilter/>
        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem}/>
      </div>
    );    
  }
}



export default App;
