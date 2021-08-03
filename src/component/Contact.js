import React from 'react';
import './Contact.css'
import Navbar from './Navbar';
import Footer from './Footer';

function Contact(props){
    const { cartItems} = props;

    const handleOnSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div >
            <Navbar countCartItems={cartItems.length} />
            <h2>Contact</h2>
            <form onSubmit={handleOnSubmit} className="contact">
                <div className="row-contact">
                    <label htmlFor="">Full Name</label>
                    <input type="text" placeholder="Full Name..." />
                </div>
                <div className="row-contact">
                    <label htmlFor="">Phone Number</label>
                    <input type="number" placeholder="Phone number..." pattern="(\+84|0)\d{9,10}" />
                </div>
                <div className="row-contact">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Email..." />
                </div>
                <div className="row-contact textarea">
                    <label htmlFor="">Message</label>
                    <textarea rows="4" cols="22" placeholder="Massage..." name="comment" form="usrform"> 
                    </textarea>
                </div>
                <div className="row-contact ">
                    <button className="button-contact">Send</button>
                </div>
            </form>
            <Footer />
        </div>
    )
}
export default Contact;