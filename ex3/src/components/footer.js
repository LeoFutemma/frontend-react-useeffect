import './style.css';
import FacebookIcon from '../assets/facebook.svg';
import InstagramIcon from '../assets/instagram.svg';
import Logo from '../assets/logo.svg';

function Footer() {
  return (
    <footer>
      <div className="footer_infos">
        <p>
          <b>Endereço:</b><br />
          <br />
          Rua Cubos, 10<br />
          Jardim Academy<br />
          Salvador - Bahia - CEP 41820-021
        </p>
        <img src={FacebookIcon} alt="facebook logo" />
        <img src={InstagramIcon} className="instagram" alt="instagram logo" />
      </div>
      <div className="footer_logo">
        <img src={Logo} alt="Cubos Academy logo" />
      </div>
    </footer>
  );
}

export default Footer;