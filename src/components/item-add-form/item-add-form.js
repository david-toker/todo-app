import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';

class ItemAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: ''
        }
    }
    onLabelChange = (e) => {
        this.setState({
            label:e.target.value
        })
    }


    onSubmit = (event) => {
        const {label} = this.state;
        event.preventDefault();
        if (label.trim()) {
            this.props.onItemAdded(label);
            this.setState({
                label: ''
            });  
        }
        else {
            alert('Please enter new task!')          
        }
        
    }

    render () {
        return (
        <form onSubmit={this.onSubmit}>
        <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2}>
            <Grid item>
                <TextField
                    id="outlined-name"
                    label="what needs to be done"
                    margin="normal"
                    variant="outlined"
                    onChange={this.onLabelChange}
                    value={this.state.label}
                />
            </Grid>
            <Grid item>
                <Button variant="contained" color="primary" type="submit">
                    Add Item
                </Button>
            </Grid>
        </Grid>
        </form>
        )
    }
}

export default ItemAddForm;