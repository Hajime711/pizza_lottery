import './TicketContainer.css'
import React, { useState } from 'react';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';

Modal.setAppElement('#root'); // Set the root element for accessibility

function TicketContainer({ stats}) {
    const history = useHistory();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [error, setError] = useState('');
    const [row, setRow] = useState('');
    const [column, setColumn] = useState('');
    const color = '#fff';
        
    const openModal = () => {
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
        setError('');
    };
    const handleBuy = () => {
        // Handle the logic for buying ticket
        const button = document.getElementById('signin_btn');
        if(button.disabled){//user signed in so show modal and perform transactions
            console.log('BUYING TICKETS');
            openModal();
        }
        else{
            alert('You need to Sign in to your Hive Wallet to buy tickets')
            history.push('/sign-in');//redirect to sign in page
        }
        // This can be customized according to your requirements
        console.log("Buy Tickets");
    };
    const BuyTickets = () => {
        const cellid = `${row}${column}`;
        if(row>5 || column>5 ||row<0 ||column<0){
            alert('Invalid row or column number entered, enter from 5X5 GRID given')
        }
        //check if this user already exists, and add to their selected boxes
        else if(stats.user_exist){
            //check cellid is not in stats.booked
            //check if pizza is available in account
            //add to stats.booked
            stats.booked.forEach((boxId) => {
                const bookedBox = document.getElementById(boxId);
                if (bookedBox) {
                  bookedBox.style.backgroundColor = color;
                }
              });
        }
        else{
            //check row and column and make sure it isnt in stats.booked
            //check if pizza is available in account
            //create new list and add box coordinates to that
            
        }
        //change the color of booked boxes to any single color
        //edit stats.jsonobj
        //upload to blockchain
        //edit the stats accordingly
        closeModal();
    }
    return (
    <div className="form-container">
        <div className="stats">
        <p>Available Tickets: {stats.availableTickets}</p>
        <p>Total Tickets Sold: {stats.totalTicketsSold}</p>
        <p>Revenue: {stats.revenue} PIZZA</p>
        </div>
        <button className="button" onClick={handleBuy}>Buy Tickets</button>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Ticket Purchase Modal"
        className="ticket-modal"
        >
        <h2>Buy Tickets</h2>
        <form onSubmit={handleBuy}>
            <div>
            <label>Quantity:1</label>
            <label>1 ticket is 0.01 PIZZA</label>
            </div>
            <div>
                <label>Ticket:</label>
                <input
                type="text"
                name="row"
                placeholder="Row"
                onChange={(e) => setRow(e.target.value)}
                />
                <input
                type="text"
                name="column"
                placeholder="Column"
                onChange={(e) => setColumn(e.target.value)}
                />
            </div>
            {error && <p className="error">{error}</p>}
            <div className="button-container">
            <button type="button" onClick={BuyTickets}>Buy</button>
            <button type="button" onClick={closeModal}>Close</button>
            </div>
            </form>
        </Modal>
        </div>
    );
}

export default TicketContainer;
