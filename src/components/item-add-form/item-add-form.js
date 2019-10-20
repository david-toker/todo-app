import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

class ItemAddForm extends Component {
    render () {
        return (
            <div>
            <Button variant="contained" color="primary"
            onClick={()=>this.props.onItemAdded('finish it!')}>
                Add Item
            </Button>
            </div>
        )
    }
}

export default ItemAddForm;