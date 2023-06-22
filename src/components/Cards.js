import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>EPIC Features of PIZZA LOTTERY!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='icons/transparency.png'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Transparent'
              path='/lottery'
            />
            <CardItem
              src='images/hive-logo.png'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Hive Engine'
              path='/lottery'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/pizza-hive.png'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Pizza-crypto'
              path='/lottery'
            />
            <CardItem
              src='icons/transaction.png'
              text='THe most secure system bla bla'
              label='secure'
              path='/lottery'
            />
            <CardItem
              src='icons/fair-trade.png'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Fair'
              path='/lottery'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
