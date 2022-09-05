import './style.css';

export default function Card({ img, modelo, precoAntigo, precoNovo, parcelas, juros }) {
  return (
    <div className='card'>
      <img src={img} className="sapato" alt="sapato" />
      <div className="card__infos">
        <p>{modelo}</p>
        <div className="infos__alinhamento margin-btm">
          <span className="preco-antigo">{precoAntigo}</span>
          <span className="preco-novo">{precoNovo}</span>
        </div>
        <div className="infos__alinhamento">
          <span className="parcelas">{parcelas}</span>
          <span className="juros">{juros}</span>
        </div>
      </div>
    </div>
  )
}