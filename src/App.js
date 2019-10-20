import React, { Component } from 'react';
import './App.css';
import TodoList from './components/todo-list/todo-list';
import SearchPanel from './components/search-panel/search-panel';
import ItemStatusFilter from './components/item-status-filter/item-status-filter';
import ItemAddForm from './components/item-add-form/item-add-form';
import TodoHeader from './components/todo-header/todo-header';




class App extends Component {
  startId = 1;
  constructor(props){
    super(props);
    this.state = {
      todoData: [
        this.createTodoItem('to do lessons'),
        this.createTodoItem('to do sport'),
        this.createTodoItem('to find new job')
      ]
    }
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.startId++
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

  addItem = (text) => {
    console.log(text);
    const newItem = this.createTodoItem(text);
    this.setState((state) => {
      return {
        todoData: [...state.todoData, newItem]
      }
    })
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex(el => el.id===id);
      const oldItem = arr[idx];
      const newItem = {...oldItem, [propName]: !oldItem[propName]};
      return [...arr.slice(0,idx), newItem,...arr.slice(idx+1)];
  }

  onToggleImportant = (id) => {
    this.setState((state) => {
      return {
        todoData: this.toggleProperty(state.todoData, id, 'important')
      }
    })
  }

  onToggleDone = (id) => {
    this.setState((state) => {
    return {
      todoData: this.toggleProperty(state.todoData, id, 'done')
    }
    });
  };


  render () {
    const { todoData } = this.state;
    const doneCount = todoData.filter(el => el.done === true).length;
    const todoCount = todoData.length-doneCount;
    return (
      <div>
        <TodoHeader toDo={todoCount} done={doneCount}/>
        <SearchPanel/>
        <ItemStatusFilter/>
        <TodoList
          todos={ todoData }
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
          />
        <ItemAddForm onItemAdded={this.addItem}/>
      </div>
    );    
  }
}



export default App;
