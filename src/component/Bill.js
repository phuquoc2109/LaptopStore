import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Bill.css'
import { Link, Route } from 'react-router-dom';

function Bill(props) {
    const { 
        cartItems,
         itemPrice, 
         taxPrice, 
         shippingPrice, 
         totalPrice, 
         handleNameInput,
         handlePhoneInput,
         handleEmailInput,
         handleAddressInput, 
         submitForm
        } = props;
    

    return (
        <div>
            <Navbar />
            <div className="bill">
                <div className="bill-1">
                    <div className="bill-title">Customer Information</div>
                        <form className="bill-11">
                            <div className="bill-1-1">
                                <label htmlFor="">Full Name</label>&ensp;
                                <input name="fullname" type="text" onChange={(e) => handleNameInput(e)} />
                            </div>
                            <div className="bill-1-1">
                                <label htmlFor="">Phone number</label>&ensp;
                                <input name="phone" type="number" onChange={(e) => handlePhoneInput(e)} />
                            </div>
                            <div className="bill-1-1">
                                <label htmlFor="">Email</label>&ensp;
                                <input name="email" type="email" onChange={(e) => handleEmailInput(e)} />
                            </div>
                            <div className="bill-1-1">
                                <label htmlFor="">Address</label>&ensp;
                                <input name="address" type="text" onChange={(e) => handleAddressInput(e)} />
                            </div>
                            
                        </form>
                    <div className="bill-button">
                        <Link to={'/cart'} ><button className="button-price"><i class="fas fa-undo-alt">&ensp;Cart</i></button></Link>
                        <Link to={'/cart/bill/exportbill'}><button type="submit" className="button-price"><i class="fas fa-check">&ensp;Confirm</i></button></Link>
                        
                    </div>
                </div>
                
                <div className="bill-2">
                    {cartItems.map((item) => (
                        <div className="bill-2-1">
                            <img className="img-cart" src={item.image} alt="" />
                            <div className="col-2">{item.name}</div>
                            <div >
                                {item.qty} x {item.price.toLocaleString()} VNĐ
                            </div>
                        </div>
                    ))}
                    <hr />
                    <div className="bill-2-2">
                        <div className="bill-price">
                            <div className="col-3">Product Price</div>
                            <div>
                                {itemPrice.toLocaleString()} VNĐ
                            </div>
                        </div>
                        <div className="bill-price">
                            <div className="col-3">Tax Price</div>
                            <div>
                                {taxPrice.toLocaleString()} VNĐ
                            </div>
                        </div>
                        <div className="bill-price">
                            <div className="col-3">Shipping Price</div>
                            <div>
                                {shippingPrice.toLocaleString()} VNĐ
                            </div>
                        </div>
                        <div className="bill-price total">
                            <div className="col-3">Total Price</div>
                            <div>
                                {totalPrice.toLocaleString()} VNĐ
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Bill;