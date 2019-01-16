import React from 'react';
import { ListGroup } from 'reactstrap';
import PostListItem from '../PostListItem';

import "./PostList.css";

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
  
  const elements = posts.map( item => {
    const {id, ...itemPost} = item;
    return (
      <li key={id} className="list-group-item">
        <PostListItem 
          {...itemPost}
          onDelete = {() => onDelete(id)}
          onToggleImportant = {() => onToggleImportant(id)}
          onToggleLiked = {() => onToggleLiked(id)}
        />
      </li>
    )
  })

  return (
    <ListGroup className="app-list">
      {elements}
    </ListGroup>
  )
}

export default PostList
