import React from 'react'
import { Button } from 'reactstrap';

const PostStatusFilter = () => {
  return (
    <div className="btn-group">
      <Button color="info">Все</Button>
      <Button type="button" color="outline-secondary">Понравилось</Button>
    </div>
  )
}

export default PostStatusFilter
