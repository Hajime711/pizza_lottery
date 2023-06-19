import './TicketContainer.css'
import React, { useState } from 'react';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';

Modal.setAppElement('#root'); // Set the root element for accessibility

function TicketContainer() {
    const history = useHistory();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [error, setError] = useState('');

    const stats = {
        availableTickets: 40,
        totalTicketsSold: 10,
        revenue: 500
    };
        
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
        //retreive booked users json from blockchain
        //check row and column and make sure it isnt already booked
        //check if pizza is available in account
        //change the color of booked boxes to any single color
        //upload updated json to blockchain
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
                />
                <input
                type="text"
                name="column"
                placeholder="Column"
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
