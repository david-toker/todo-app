import React, {Component} from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

class ItemStatusFilter extends Component {
    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ]

    render() {
        const {filter, onFilterChange} = this.props;
        const buttons = this.buttons.map(({name, label})=>{
            const isActive = filter === name;
            return (
            <ToggleButton selected={isActive} value={name} key={name} onClick={()=>onFilterChange(name)}>
            {label}
            </ToggleButton>
            )
        })
        return (
            <div>
            <ToggleButtonGroup size="medium">
            {buttons}
            </ToggleButtonGroup> 
            </div>
        )
    }
}


export default ItemStatusFilter;