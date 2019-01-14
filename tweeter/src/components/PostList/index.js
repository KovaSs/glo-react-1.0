import React from 'react'
import PostListItem from '../PostListItem'

import "./PostList.css"

const PostList = ({posts}) => {
  
  const elements = posts.map( item => {
    const {id, ...itemPost} = item;
    return (
      <li key={id} className="list-group-item">
        <PostListItem {...itemPost}/>
      </li>
    )
  })

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default PostList
