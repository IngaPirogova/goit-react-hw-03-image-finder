import React from 'react';
import css from './Modal.module.css';
import { createPortal } from 'react-dom';


const modalRoot = document.querySelector('#modal-root');

export class Modal extends React.Component {
  componentDidMount() {  
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }        
    };
  

  handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

   render() {
    return createPortal(
      <div className={css.overlay} onClick={this.handleBackDropClick}>
        <div className={css.modal}>
            <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}


