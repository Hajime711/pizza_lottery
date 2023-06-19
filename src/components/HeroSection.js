import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
  const buttonStyle = {
    marginBottom: '10px'
  };
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>YOUR PIZZA CRYPTO AWAITS</h1>
      <p>The first Hive Engine Lottery system which works with Pizza crypto currency</p>
      <div className='hero-btns'>
        <Link to='/lottery'><button style={buttonStyle}>PLAY</button></Link>
        <Link to='/about'><button>HOW IT WORKS <i className='far fa-file' /></button></Link>
      </div>
    </div>
  );
}

export default HeroSection;
