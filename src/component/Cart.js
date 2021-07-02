import React from 'react'
import Navbar from './Navbar';
import './Cart.css'
import Contact from './Contact';
import Footer from './Footer';
import Bill from './Bill';
import { Link, Route } from 'react-router-dom';

function Cart(props) {
    const { cartItems, onAdd, onRemove, itemPrice, taxPrice, shippingPrice, totalPrice } = props;
    
    return (
        <aside className="block col-1">
            <Navbar />
            <h2>Cart Product<i class="fas fa-shopping-cart cart-cart"></i></h2>
            
            <div>
                {cartItems.length === 0  &&  <h5>CART IS EMPTY</h5>}
            </div>
            {cartItems.map((item) => (
                <div key={item.id} className="row-cart">
                    <img className="img-cart" src={item.image} alt="" />
                    <div className="col-2">{item.name}</div>
                    <div className="add-remove">
                    <button onClick={() => onAdd(item)} className="add">+</button>
                    <button onClick={() => onRemove(item)} className="remove">-</button>
                    </div>
                    <div className="col-2" >
                        {item.qty} x {item.price.toLocaleString()} VNĐ
                    </div>

                </div>
            ))}
            {
                cartItems.length > 0 && (
                    <div className="price">
                        <div className="payment">Payment</div>
                        <div className="row-price">
                            <div className="col-3">Product Price</div>
                            <div>
                                {itemPrice.toLocaleString()} VNĐ
                            </div>
                        </div>
                        <div className="row-price">
                            <div className="col-3">Tax Price</div>
                            <div>
                                {taxPrice.toLocaleString()} VNĐ
                            </div>
                        </div>
                        <div className="row-price">
                            <div className="col-3">Shipping Price</div>
                            <div>
                                {shippingPrice.toLocaleString()} VNĐ
                            </div>
                        </div>
                        <div className="row-price total">
                            <div className="col-3">Total Price</div>
                            <div>
                                {totalPrice.toLocaleString()} VNĐ
                            </div>
                        </div>
                        <div className="row-price">
                            <Link to={'/cart/bill'} ><button className="button-price">Pay the bill</button></Link>
                       </div>
                    </div>
                )
            }
            <Footer />
        </aside>
    )
}
export default Cart;