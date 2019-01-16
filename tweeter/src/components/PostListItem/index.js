import React from 'react'

import "./PostListItem.css"

const PostListItem = () => {

  const [day, month] = new Date().toLocaleDateString("ru",{month:"2-digit", day:"numeric"}).split(' ');

  return (
    <li className="app-list-item d-flex justify-content-between">
      <span className="app-list-item-label">
        Hello World!
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <>
          <span>{month}</span>
          <span>{day}</span>
        </>
        <button 
          type="button"
          className="btn-star btn-sm"
        >
          <i className="fa fa-star"></i>
        </button>
        <button 
          type="button"
          className="btn-trash btn-sm"
        >
          <i className="fa fa-trash-o"></i>
        </button>
        <i className="fa fa-heart"></i>
      </div>
    </li>
  )
}

export default PostListItem
