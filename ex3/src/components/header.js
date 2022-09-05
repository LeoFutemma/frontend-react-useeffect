import './style.css';
import Banner from '../assets/banner.jpg';
import Logo from '../assets/logo.svg';

function Header() {
  return (
    <header style={{ backgroundImage: `url(${Banner})`, borderRadius: "0 0 32px 32px" }}>
      <h1>MODA MASCULINA</h1>
      <h2>SAPATOS SOCIAIS - CASUAIS - ESPORTE FINO</h2>
      <img src={Logo} className="header__logo" alt="Cubos Academy logo" />
    </header>
  );
}

export default Header;