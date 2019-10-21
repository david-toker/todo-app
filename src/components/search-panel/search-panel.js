import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';


class SearchPanel extends Component {

    onSearchItem = (e) => {
        this.props.onSearchItem(e.target.value)
    }

    render() {
        return (
            <div>
            <TextField
            id="outlined-name"
            label="type to search"
            margin="normal"
            variant="outlined"
            onChange={this.onSearchItem}
            />
        </div> 
        )
    }
}


export default SearchPanel