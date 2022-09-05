import './style.css';
import CloseIcon from '../assets/close-icon.svg';

function Modal({ currentSapato, modal, setModal }) {
  return (
    <div className='container-modal'>
      <div className='modal'>
        <img src={CloseIcon} onClick={() => setModal(!modal)} className="close-btn" alt="close" />
        <img src={currentSapato.img} className="modal__sapato" alt="sapato" />
        <h3>{currentSapato.modelo}</h3>
        <p>
          Sofisticado e cheio de elegância, este sapato estilo Derby deixará o seu look impecável. Feito de couro, conta com design moderno, solado flexível e palmilha extra macia. Com muito bom gosto e charme, é o tipo de sapato masculino que se adapta a qualquer ocasião, desde as formais as mais casuais. Fica incrível se combinado com camisa social manga longa e calça de linho.
        </p>
        <div className="modal__infos">
          <button>COMPRAR</button>
          <div>
            <div className="modal__precos">
              <span className="modal__preco-antigo">{currentSapato.precoAntigo}</span>
              <span className="modal__preco-novo">{currentSapato.precoNovo}</span>
            </div>
            <div className="modal__pagamento">
              <span className="modal__parcelas">{currentSapato.parcelas}</span>
              <span className="modal__juros">{currentSapato.juros}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;