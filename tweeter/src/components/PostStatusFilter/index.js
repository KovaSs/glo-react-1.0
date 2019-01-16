import React, {Component} from 'react'
import { Button } from 'reactstrap';

import {buttons as btn} from '../../mock';

class PostStatusFilter extends Component {
  buttons = btn;
  render(){
    const {buttons} = this;
    const {filter, onFilterSelect} = this.props;

    const btn = buttons.map(({name, label}) => {
      const active = filter === name;
      const clazz = active ? 'info' : 'outline-secondary';
      return (
        <Button 
          key={name} 
          color={clazz}
          onClick={() => onFilterSelect(name)}
        >
          {label}
        </Button>
      )
    })
    return (
      <div className="btn-group">
        {btn}
      </div>
    )
  }
}

export default PostStatusFilter
