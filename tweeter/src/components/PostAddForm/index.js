import React from 'react';
import { Button } from 'reactstrap';

import "./PostAddForm.sass"

const PostAddForm = ({onAdd}) => {
  return (
    <div className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="Очем вы сейчас думаете?"
        className="form-control new-post-label"
      />
      <Button
        type="submit"
        color="outline-secondary"
        onClick={() => onAdd('Hello!')}
      >
        Добавить
      </Button>
    </div>
  )
}

export default PostAddForm
