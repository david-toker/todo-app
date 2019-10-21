import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import TodoListItem from '../todo-list-item/todo-list-item';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

const TodoList = ({todos, onDeleted, onToggleDone, onToggleImportant}) => {
    const classes = useStyles();
    const elements = todos.map(item => {
        const {id, ...itemProps} = item;

        return (
        <ListItem key={id}>
            <TodoListItem
                { ...itemProps }
                onDeleted={()=>onDeleted(id)}
                onToggleDone={()=>onToggleDone(id)}
                onToggleImportant={()=>onToggleImportant(id)}
                />
        </ListItem>
        );
        });
    return (
    <div className={classes.root}>
        <List>
            {elements}
        </List>
    </div>
    );
};

export default TodoList;

