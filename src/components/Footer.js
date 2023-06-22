import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          FAILURE doesn't mean GAME OVER, it means try again with EXPERIENCE
        </p>
        <p className='footer-subscription-text'>
          Your go-to Hive Pizza Lottery
        </p>
        <div className='input-areas'>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Hive</h2>
            <a  href={'https://hive.io/'} target="_blank" rel="noopener noreferrer">Hive Blockchain</a>
            <a  href={'https://hive-keychain.com/'} target="_blank" rel="noopener noreferrer">Hive Keychain</a>
            <a  href={'https://hive.io/eco/'} target="_blank" rel="noopener noreferrer">Hive Ecosystem</a>
          </div>
          <div class='footer-link-items'>
            <h2>Pizza Lottery</h2>
            <a  href={'https://hive.pizza/'} target="_blank" rel="noopener noreferrer">Pizza Guild</a>
            <a  href={'https://www.bahria.edu.pk/bukc/'} target="_blank" rel="noopener noreferrer">Sponsor</a>
            <a  href={'https://github.com/Hajime711/pizza-lottery'} target="_blank" rel="noopener noreferrer">Source code</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              PL
              <i class='fas fa-pizza-slice' style={{ color: '#ec9b00' }}/>
            </Link>
          </div>
          <small class='website-rights'>PizzaLottery © 2023</small>
          <div class='social-icons'>
            <a className='social-logo' href={'https://github.com/Hajime711/pizza-lottery'} target="_blank" rel="noopener noreferrer"><i class='fab fa-github'/></a>
            <a className='social-logo' href={'https://discordapp.com/users/838012541485580290'} target="_blank" rel="noopener noreferrer"><i class='fab fa-discord'/></a>
            <a className='social-logo' href={'https://www.instagram.com/thehive_official/?hl=en'} target="_blank" rel="noopener noreferrer"><i class='fab fa-instagram'/></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;