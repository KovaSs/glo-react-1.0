import React, {Component} from 'react'

import "./PostListItem.sass"

class PostListItem extends Component{

  state = {
    important: false,
    like: false,
    edit: false,
    postValue: ''
  }

  onImportant = () => {
    this.setState(({important}) => ({
      important : !important
    }))
  }
  onLike = () => {
    this.setState(({like}) => ({
      like : !like
    }))
  }
  onEdit = () => {
    this.setState(({edit}) => ({
      edit : !edit
    }))
  }
  changePostLabel = event => {
    this.setState({
      postValue : event.target.value
    })
  }

  render() {

    const {label} = this.props;
    const {important, like, edit, postValue} = this.state;
    const [day, month] = new Date().toLocaleDateString("ru",{month:"2-digit", day:"numeric"}).split(' ');

    let classNames="app-list-item d-flex justify-content-between edit"
    if(important){
      classNames +=" important"
    }
    if(like){
      classNames +=" like"
    }

    return (
      <>
      <div
        className={classNames}
      >
        <span 
          onClick={this.onLike}
          className="app-list-item-label"
        >
          {postValue ? postValue : label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
        <>
          <span>{day}</span>
          <span>{month}</span>
        </>
          <button 
            type="button"
            className="btn-star btn-sm"
            onClick={this.onImportant}
          >
            <i className="fa fa-star"></i>
          </button>
          <button 
            type="button"
            className="btn-trash btn-sm"
          >
            <i className="fa fa-trash-o"></i>
          </button>
          <button 
            type="button"
            className="btn-edit btn-sm"
            onClick={this.onEdit}
          >
            <i className="fa fa-pencil-square-o"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </div>
      {
          edit ? 
          <div className="bottom-panel d-flex">
            <input 
              className="form-control new-post-label"
              onChange={this.changePostLabel}
              type="text"
              value={postValue}
            />
            <button 
            onClick={this.onEdit}
            className="btn btn-outline-secondary"
            >Сохранить</button>
          </div>
          : null
        }
      </>
    )
  }
}

export default PostListItem
