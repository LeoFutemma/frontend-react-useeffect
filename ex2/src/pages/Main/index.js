import './style.css';
import { useRef, useEffect, useState } from 'react';

function Main() {
  const inputRef = useRef(null);
  const ulRef = useRef(null);
  const [notificacao, setNotificacao] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setNotificacao(false);
    }, 1500);

    console.log("teste");
  }, [notificacao])

  function handleAddName() {
    if (!inputRef.current.value) {
      return;
    }

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(inputRef.current.value));
    ulRef.current.appendChild(li);

    inputRef.current.value = '';
    setNotificacao(true)
  }

  return (
    <div className="container">
      <div className="container__left">
        <input ref={inputRef} type="text" placeholder="Nome" />
        <button onClick={() => handleAddName()}>Adicionar</button>
      </div>

      {notificacao && <div className='notificacao'>Novo usuário adicionado!</div>}

      <div className="container__right">
        <h1>Usuários</h1>
        <div className="lista-usuarios">
          <ul ref={ulRef}>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Main;