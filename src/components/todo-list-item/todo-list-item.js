import React from 'react';
import './todo-list-item.css';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';


class TodoListItem extends React.Component {
    constructor(props){
        super(props);
        this.state={
            done: false,
            important: false
        }
    }
    onLabelClick = () => {
        console.log(`Done ${this.props.label}`);
        this.setState((state) => {
            return {
                done: !state.done
            };
        });
    }

    onMarkImportant = () => {
        this.setState((state) => {
            return {
                important: !state.important
            }
        })
    }

    render() {
        const {label} = this.props;
        const {done, important} = this.state;
        const spanStyle = {
            // color: important ? 'tomato' : 'black',
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
            onClick={this.onLabelClick}>
            {label}
        </span>
        <ListItemSecondaryAction>
            <IconButton edge="end" onClick={this.props.onDeleted}>
                <DeleteForeverIcon style={{color: "red"}}/>
            </IconButton>
            <IconButton edge="end" onClick={this.onMarkImportant}>
                <PriorityHighIcon style={{color: "green"}}/>
            </IconButton>
        </ListItemSecondaryAction>
        </div>
        )
    }
}


// const TodoListItemFunc = ({label, important=false}) => {
//     const spanStyle = {
//         color: important ? 'tomato' : 'black'
//     };
//     return (
//         <span style={spanStyle}>
//             {label}
//         </span>
//     );
// };

export default TodoListItem;