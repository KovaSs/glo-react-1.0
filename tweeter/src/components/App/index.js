import React from 'react'
import AppHeader from '../AppHeader'
import SearchPanel from '../SearchPanel'
import PostStatusFilter from '../PostStatusFilter'
import PostList from '../PostList'
import PostAddForm from '../PostAddForm'

import "./App.css"

const App = () => (
  <div className="app">
    <AppHeader/>
    <div className="d-flex search-panel">
      <SearchPanel/>
      <PostStatusFilter/>
    </div>
    <PostList/>
    <PostAddForm/>
  </div>
)

export default App