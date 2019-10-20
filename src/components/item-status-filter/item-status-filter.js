import React from 'react';
// import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const ItemStatusFilter = () => {
    return (
        <div>
            <ToggleButtonGroup size="medium">
            <ToggleButton selected={true}  value="all">
            All
            </ToggleButton>
            <ToggleButton  value="active">
            Active
            </ToggleButton>
            <ToggleButton  value="done">
            Done
            </ToggleButton>
            </ToggleButtonGroup>
            {/* <ButtonGroup color="primary" aria-label="outlined primary button group">
              <Button>All</Button>
              <Button>Active</Button>
              <Button>Done</Button>
            </ButtonGroup> */}
        </div>
    );
};

export default ItemStatusFilter;