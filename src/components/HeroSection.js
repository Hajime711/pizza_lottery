import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>YOUR PIZZA CRYPTO AWAITS</h1>
      <p>The first Hive Engine Lottery system which works with Pizza crypto currency</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          PLAY
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          HOW IT WORKS <i className='far fa-file' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
