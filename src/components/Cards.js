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
              text='Transparent transactions, trusted ecosystem'
              label='Transparent'
              path='/lottery'
            />
            <CardItem
              src='images/hive-logo.png'
              text='Fueling engagement and value within the Hive blockchain ecosystem'
              label='Hive Engine'
              path='/lottery'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/pizza-hive.png'
              text='Empowering decentralized tokenization and exchange'
              label='Pizza-crypto'
              path='/lottery'
            />
            <CardItem
              src='icons/transaction.png'
              text='Fortified by robust security measures, safeguarding digital assets and transactions'
              label='secure'
              path='/lottery'
            />
            <CardItem
              src='icons/fair-trade.png'
              text='Ensuring fairness through transparent and unbiased randomization'
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
