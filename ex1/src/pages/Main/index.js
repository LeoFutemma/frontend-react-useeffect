import './style.css';
import React from 'react';
import Modal from '../../components';
import { useEffect, useState } from 'react';

function Main() {
  const [modal, setModal] = useState(false)

  return (
    <div className="container">
      <button onClick={() => setModal(!modal)}>Abrir modal</button>
      {modal && <Modal
        modal={modal}
        setModal={setModal}
      />}
    </div>
  );
}

export default Main;