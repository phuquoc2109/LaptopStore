import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link, Route } from 'react-router-dom';
import './ExportBill.css';

function ExportBill(props) {
    const { 
        valueNameInput,
        valuePhoneInput,
        valueEmailInput,
        valueAddressInput,
        cartItems,
        totalPrice } = props;


    return (
        <div>
            <Navbar />
            <div className="exportbill-title">Payment Receipt</div>
            <form className="exportbill-form">
                <div className="exportbill-form-1">
                    <div className="exportbill-form-1-lable">Full Name</div>
                    <div className="exportbill-form-1-lable">Phone</div>
                    <div className="exportbill-form-1-lable">Email</div>
                    <div className="exportbill-form-1-lable">Address</div>
                    <div className="exportbill-form-1-lable">Name product</div>
                    <div className="exportbill-form-1-lable">Total price</div>
                </div>
                <div className="exportbill-form-2">
                    <div className="exportbill-form-2-form">
                        <div className="exportbill-form-2-value">{valueNameInput.fullname}</div>
                    </div>
                    <div className="exportbill-form-2-form">
                        <div className="exportbill-form-2-value">{valuePhoneInput.phone}</div>
                    </div>
                    <div className="exportbill-form-2-form">
                        <div className="exportbill-form-2-value">{valueEmailInput.email}</div>
                    </div>
                    <div className="exportbill-form-2-form">
                        <div className="exportbill-form-2-value">{valueAddressInput.address}</div>
                    </div>
                    <div className="bill-item">
                        {cartItems.map((item) => (
                            <div className="">{item.id}: {item.name}</div>
                        ))}
                    </div>
                    <div className="exportbill-form-2-form">{totalPrice.toLocaleString()} VNĐ</div>
                </div>
            </form>

        </div>

    )
}
export default ExportBill;