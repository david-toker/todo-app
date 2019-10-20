import React from 'react';
import TextField from '@material-ui/core/TextField';

const SearchPanel = () => {
    return (
        <div>
            {/* <input placeholder="what you want to do"/> */}
            <TextField
            id="outlined-name"
            label="type to search"
            margin="normal"
            variant="outlined"
            />
        </div>
    )
}

export default SearchPanel