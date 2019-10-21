import React from 'react';
import './todo-list-item.css';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';


class TodoListItem extends React.Component {


    render() {
        const {label, done, important} = this.props;
        const spanStyle = {
            cursor: 'pointer'
        };
        let classNames = 'todo-list-item';

        if(done){
            classNames += ' done'
        }
        if(important){
            classNames += ' important'
        }
        return (
        <div>
        <span
            className={classNames}
            style={spanStyle}
            onClick={this.props.onToggleDone}>
            {label}
        </span>
        <ListItemSecondaryAction>
            <IconButton edge="end" onClick={this.props.onDeleted}>
                <DeleteForeverIcon style={{color: "red"}}
                />
            </IconButton>
            <IconButton edge="end"
            onClick={this.props.onToggleImportant}
            >
                <PriorityHighIcon style={{color: "green"}}/>
            </IconButton>
        </ListItemSecondaryAction>
        </div>
        )
    }
}


export default TodoListItem;