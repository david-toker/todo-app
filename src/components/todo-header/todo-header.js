import React from 'react';
import Grid from '@material-ui/core/Grid';

const TodoHeader = ({toDo, done}) => {
    return (
        <div>
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center">
                <Grid item xs={12} sm={3} md={2}>
                    <h1>Todo List</h1>
                </Grid>
                <Grid item xs={12} sm={9} md={10}>
                    <h2>{toDo} more to do, {done} done</h2>
                </Grid>
            </Grid>   
        </div>
    )
}

export default TodoHeader;