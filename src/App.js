import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

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
      ],
      term: '',
      filter: 'all'
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

  onSearchItem = (term) => {
    
    this.setState({term})
  }

  search(items,term) {
    if(term.length ===0) {
      return items;
    }
    return items.filter(el=>{return el.label.toLowerCase().includes(term.toLowerCase())})
  }

  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter(el=>!el.done);
      case 'done':
        return items.filter(el=>el.done);
      default:
        return items;
    }
  }

  onFilterChange = (filterName) => {
    // console.log(filterName);
    this.setState({
      filter: filterName
    });
  }

  render () {
    const { todoData, term, filter } = this.state;
    const doneCount = todoData.filter(el => el.done === true).length;
    const todoCount = todoData.length-doneCount;
    const visibleData = this.filter(this.search(todoData, term), filter)
    return (
      <div>
        <TodoHeader toDo={todoCount} done={doneCount}/>
        <Container>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
              spacing={2}
              >
              <Grid item >
                <SearchPanel onSearchItem={this.onSearchItem}/>  
              </Grid>
              <Grid item >
                <ItemStatusFilter
                filter={filter}
                onFilterChange={this.onFilterChange}/>
              </Grid>
            </Grid>
        
        <ItemAddForm onItemAdded={this.addItem}/>
        <TodoList
          todos={ visibleData }
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
          />
        
        </Container>
      </div>
    );    
  }
}



export default App;
