import React from 'react'
import PostListItem from '../PostListItem'

import "./PostList.css"

const PostList = ({posts}) => {
  
  const elements = posts.map( item => {
    // Сортировка входящих параметров на соответствие объекту
    if(item !== null && typeof item === 'object' && Object.prototype.toString.call(item) === '[object Object]') {
      const {id, ...itemPost} = item;
      return (
        <li key={id} className="list-group-item">
          <PostListItem {...itemPost}/>
        </li>
      )
    }
  })

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default PostList
