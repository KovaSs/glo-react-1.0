import React from 'react'
import AppHeader from '../AppHeader'
import SearchPanel from '../SearchPanel'
import PostStatusFilter from '../PostStatusFilter'
import PostList from '../PostList'
import PostAddForm from '../PostAddForm'

import "./App.css"

const App = () => {

  const data = [
    {
      label: "Going to learn React",
      important: true,
      id: 'new-post-1'
    },
    {
      label: "That is so good!",
      important: false,
      id: 'new-post-2'
    },
    {
      label: "I need a break...",
      important: false,
      id: 'new-post-3'
    },
  ];

  return (
    <div className="app">
      <AppHeader/>
      <div className="d-flex search-panel">
        <SearchPanel/>
        <PostStatusFilter/>
      </div>
      <PostList posts={data}/>
      <PostAddForm/>
    </div>
  )
}

export default App