import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import "./PostListItem.sass"

class PostListItem extends Component{

  state = {
    edit: false,
    postValue: '', 
    modal : false
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
  toggleModal = () => {
    this.setState(({modal}) => {
      return {
        modal : !modal
      }
    });
  }

  render() {

    const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props;
    const {edit, postValue, modal} = this.state;
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
          onClick={onToggleLiked}
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
            onClick={onToggleImportant}
          >
            <i className="fa fa-star"></i>
          </button>
          <button 
            type="button"
            className="btn-trash btn-sm"
            onClick={this.toggleModal}
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
        { modal ? 
          <>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Удаление поста</ModalHeader>
              <ModalBody>
                Вы уверены что хотите удалить запись?
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={onDelete}>Да</Button>{' '}
                <Button color="secondary" onClick={this.toggleModal}>Отмена</Button>
              </ModalFooter>
            </Modal>
          </>
          : null
        }
      </>
    )
  }
}

export default PostListItem
