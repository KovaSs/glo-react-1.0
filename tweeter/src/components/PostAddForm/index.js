import React, {Component} from 'react';
import { Button } from 'reactstrap';

import "./PostAddForm.sass"

class PostAddForm extends Component {
  state = {
    inputValue: ''
  }

  onValueChange = e => {
    this.setState({
      inputValue : e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.onAdd(this.state.inputValue);
    this.setState({
      inputValue : ''
    })
  }

  render() {
    const {inputValue} = this.state
    return (
      <form 
        className="bottom-panel d-flex"
        onSubmit={this.onSubmit}
      >
        <input
          type = "text"
          placeholder = "Очем вы сейчас думаете?"
          className = "form-control new-post-label"
          onChange = {this.onValueChange}
          value = {inputValue}
        />
        <Button
          type="submit"
          color="outline-secondary"
        >
          Добавить
        </Button>
      </form>
    )
  }
}

export default PostAddForm
