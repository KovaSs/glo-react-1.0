import React, {Component} from 'react'
import AppHeader from '../AppHeader'
import SearchPanel from '../SearchPanel'
import PostStatusFilter from '../PostStatusFilter'
import PostList from '../PostList'
import PostAddForm from '../PostAddForm'
import idGenerator from 'react-id-generator';

import "./App.sass"
let {cloneDeep} = require('lodash')
/* import styled from "styled-components"

const AppBlock = styled.div`
  margin: 0 auto
  max-width: 800px
` */

class App extends Component {

  state = {
    data : [
      `string`,
      5,
      null,
      true,
      [],
      {
        label: "Going to learn React",
        important: true,
        id: 'post-1'
      },
      {
        label: "That is so good!",
        important: false,
        id: 'post-2'
      },
      {
        label: "I need a break...",
        important: false,
        id: 'post-3'
      },
    ]
  }

  deleteItem = id => {
    this.setState( ({data}) => {
      const index = data.findIndex( elem => {
        if(elem !== null && typeof elem === 'object' && Object.prototype.toString.call(elem) === '[object Object]') {
          return elem.id === id
        }
      });
      const newArr = cloneDeep(data);
      newArr.splice(index, 1);
      return {
        data: newArr
      }
    })
  }

  addItem = text => {
    const newPost = {
      label: text,
      important: false,
      id: `${idGenerator('new-post-')}`
    }
    this.setState(({data}) => {
      const newData = cloneDeep(data);
      newData.push(newPost);
      return {
        data: newData
      }
    })
  }

  render(){
    const {data} = this.state
    return (
      <div className="app">
        <AppHeader/>
        <div className="d-flex search-panel">
          <SearchPanel/>
          <PostStatusFilter/>
        </div>
        <PostList 
          posts={data}
          onDelete={this.deleteItem}
        />
        <PostAddForm
          onAdd={this.addItem}
        />
      </div>
    )
  }
}

export default App