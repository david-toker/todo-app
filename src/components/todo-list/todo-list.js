import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
// import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
// import IconButton from '@material-ui/core/IconButton';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import TodoListItem from '../todo-list-item/todo-list-item';
// import color from '@material-ui/core/colors/red';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

const TodoList = ({todos, onDeleted}) => {
    const classes = useStyles();
    const elements = todos.map(item => {
        const {id, ...itemProps} = item;

        return (
        <ListItem key={id}>
            <TodoListItem {...itemProps} onDeleted={()=>onDeleted(id)}/>
            {/* <ListItemSecondaryAction>
                <IconButton edge="end">
                    <DeleteForeverIcon style={{color: "red"}}/>
                </IconButton>
                <IconButton edge="end">
                    <PriorityHighIcon style={{color: "green"}}/>
                </IconButton>
            </ListItemSecondaryAction> */}
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



// const TodoList = ({todos}) => {

//     const elements = todos.map(item => {
//         const {id, ...itemProps} = item;

//         return (
//         <li key={id}>
//             <TodoListItem {...itemProps}/>
//         </li>
//         );
//         });
//     return (
//     <div>
//         <ul>
//             {elements}
//         </ul>
//     </div>
//     );
// };

// export default TodoList;