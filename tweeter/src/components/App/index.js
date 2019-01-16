import React from 'react'
import AppHeader from '../AppHeader'
import SearchPanel from '../SearchPanel'
import PostStatusFilter from '../PostStatusFilter'
import PostList from '../PostList'
import PostAddForm from '../PostAddForm'

// import "./App.sass"
import styled from "styled-components"

const AppBlock = styled.div`
  margin: 0 auto
  max-width: 800px
`

const App = () => {

  const data = [
    `string`,
    5,
    null,
    true,
    [],
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
    <AppBlock>
      <AppHeader/>
      <div className="d-flex search-panel">
        <SearchPanel/>
        <PostStatusFilter/>
      </div>
      <PostList posts={data}/>
      <PostAddForm/>
    </AppBlock>
  )
}

export default App