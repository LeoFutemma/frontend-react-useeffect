import './style.css';
import Card from './card';
import Modal from './modal';
import { sapatos } from '../sapatos';
import { useEffect, useState } from 'react';

function Section() {
  const [modal, setModal] = useState(false);
  const [currentSapato, setCurrentSapato] = useState({
    id: 0,
    img: '',
    modelo: '',
    precoAntigo: '',
    precoNovo: '',
    parcelas: '',
    juros: ''
  });

  function selecionaSapato(sapato) {
    setCurrentSapato(sapato);
    setModal(!modal);
  }

  useEffect(() => {
    if (modal) {
      console.log("A aula é de useEffect mas não precisei usar isso para nada, então aqui um console.log só pra falar que tem useEffect no código xD");
    }
  }, [modal]);

  return (
    <section>
      {modal && <Modal
        currentSapato={currentSapato}
        modal={modal}
        setModal={setModal}
      />}

      <div className="container-cards">
        {sapatos.map((sapato) => (
          <div onClick={() => selecionaSapato(sapato)}
            key={sapato.id}
          >
            <Card
              img={sapato.img}
              modelo={sapato.modelo}
              precoAntigo={sapato.precoAntigo}
              precoNovo={sapato.precoNovo}
              parcelas={sapato.parcelas}
              juros={sapato.juros}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section;