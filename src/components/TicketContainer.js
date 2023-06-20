import './TicketContainer.css'
import React, { useState } from 'react';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';

Modal.setAppElement('#root'); // Set the root element for accessibility

function TicketContainer({stats}) {
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
    };
    const BuyTickets = () => {
        const cellid = parseInt(`${row}${column}`);
        const button = document.getElementById('signin_btn');
        var booked = [];
        const username = button.innerText.toLowerCase();
        if(row>5 || column>5 ||row<0 ||column<0){
            alert('Invalid row or column number entered, enter from 5X5 GRID given')
        }
        //check if this user already exists, and add to their selected boxes
        else if(stats.booked.includes(cellid)){
            alert('This ticket is already booked!');
        }
        else{
            if(true){//check if pizza is there in account
                if(stats.json_obj.hasOwnProperty(username)){//username already exists
                    booked = stats.json_obj[username];
                    booked.push(cellid);
                    stats.json_obj[username] = booked;
                    console.log(booked);
                }
                else{//user doesnt exist already
                    booked.push(cellid);
                    stats.json_obj[username] = booked;
                    console.log(booked);
                }
            }
            else{
                alert('Insufficient funds in your wallet');
            }
            //change the color of booked boxe to green
            const gridCell = document.getElementById(cellid);
            if (gridCell) {
                gridCell.style.backgroundColor = "#00FF00"; // Replace "your-color" with the desired background color
            }
            //upload stats json obj to blockchain to blockchain
            console.log(stats.json_obj);
            //edit the stats accordingly
            const count=booked.length;
            stats.totalTicketsSold = stats.totalTicketsSold+count;
            stats.availableTickets = stats.availableTickets-count;
            stats.revenue = stats.revenue+(count*0.01);
        }
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
