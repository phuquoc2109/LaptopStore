import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link, Route } from 'react-router-dom';
import './ExportBill.css';

function ExportBill(props){
    const {valueInput, cartItems, totalPrice} = props;

    valueInput.map((value)=>(
        console.log(value)
    ))
    console.log(valueInput);
    console.log(cartItems);
    return(
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
                {valueInput.map((value, index) =>(
                    <div className="exportbill-form-2-form"> 
                        <div className="exportbill-form-2-value" >{value.fullname}</div>
                        <div className="exportbill-form-2-value">{value.phone}</div>
                        <div className="exportbill-form-2-value">{value.email}</div>
                        <div className="exportbill-form-2-value">{value.address}</div>
                    </div>
                ))}
                <div className="bill-item">
                {cartItems.map((item)=>(      
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