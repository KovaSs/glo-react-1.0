import React from 'react';
import { ListGroup } from 'reactstrap';
import PostListItem from '../PostListItem';

import "./PostList.css";

const PostList = ({posts, onDelete}) => {
  
  const elements = posts.map( item => {
    // Сортировка входящих параметров на соответствие объекту
    if(item !== null && typeof item === 'object' && Object.prototype.toString.call(item) === '[object Object]') {
      const {id, ...itemPost} = item;
      return (
        <li key={id} className="list-group-item">
          <PostListItem 
            {...itemPost}
            onDelete = {() => onDelete(id)}
          />
        </li>
      )
    }
  })

  return (
    <ListGroup className="app-list">
      {elements}
    </ListGroup>
  )
}

export default PostList
