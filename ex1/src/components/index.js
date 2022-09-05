import './style.css';
import React from 'react';

function Modal({ modal, setModal }) {
  return (
    <div className='container-modal'>
      <div className='modal'>
        <h1>Users</h1>
        <ul>
          <li>Daniel</li>
          <li>Daniel</li>
          <li>Daniel</li>
          <li>Daniel</li>
          <li>Daniel</li>
          <li>Daniel</li>
        </ul>
        <button onClick={() => setModal(!modal)}>Fechar modal</button>
      </div>
    </div>
  )
}

export default Modal;