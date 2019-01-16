import React, {Component} from 'react'
import AppHeader from '../AppHeader'
import SearchPanel from '../SearchPanel'
import PostStatusFilter from '../PostStatusFilter'
import PostList from '../PostList'
import PostAddForm from '../PostAddForm'
import idGenerator from 'react-id-generator';
import {checkPostsIntoObj as check} from '../../service';
import {data as postData} from '../../mock';

import "./App.sass"
let {cloneDeep, findIndex} = require('lodash')
/* import styled from "styled-components"

const AppBlock = styled.div`
  margin: 0 auto
  max-width: 800px
` */

class App extends Component {

  state = {
    data : check(postData),
    term: '',
    filter: 'all'
  }

  deleteItem = id => {
    this.setState( ({data}) => {
      const index = data.findIndex( elem => {
        return elem.id === id
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

  onToggleImportant = id => {
    this.setState(({data}) => {
      const index = findIndex(data, el => { 
        return el.id === id
      });
      const old = data[index];
      const newItem = {...old, important: !old.important};
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      return {
        data : newArr
      }
    })
  }

  onToggleLiked = id => {
    this.setState(({data}) => {
      const index = findIndex(data, el => { 
        return el.id === id
      });
      const old = data[index];
      const newItem = {...old, like: !old.like};
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      return {
        data : newArr
      }
    })
  }

  searchPost = (items, term) => {
    if(term.length === 0) {
      return items
    } else {
      return items.filter( el => {
        return el.label.indexOf(term) > -1;
      })
    }
  }

  onUpdateSearch = term => {
    this.setState({term})
  }

  filterPosts = (items, filter) => {
    if(filter === 'like') {
      return items.filter( el => el.like)
    } else {
      return items
    }
  }

  onFilterSelect = filter => {
    this.setState({filter})
  }

  render(){
    const {filterPosts, searchPost} = this;
    const {data, term, filter } = this.state;
    const liked = data.filter(el => el.like).length;
    const allPosts = data.filter(el => el).length;

    const visiblePost = filterPosts(searchPost(data, term), filter);

    return (
      <div className="app">
        <AppHeader
          liked = {liked}
          allPosts = {allPosts}
        />
        <div className="d-flex search-panel">
          <SearchPanel
            onUpdateSearch={this.onUpdateSearch}
          />
          <PostStatusFilter 
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList 
          posts={visiblePost}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
        <PostAddForm
          onAdd={this.addItem}
        />
      </div>
    )
  }
}

export default App