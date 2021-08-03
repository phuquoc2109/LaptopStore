import './App.css';
import Navbar from './component/Navbar';
import SignIn from './component/SignUp';
import Slideshow from './component/Slideshow';
import Products from './component/Products';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Cart from './component/Cart';
import Home from './component/Page/Home'
import Contact from './component/Contact';
import ScroollToTop from './component/Page/ScroollToTop';
import { Fragment } from 'react';
import Bill from './component/Bill';
import ExportBill from './component/ExportBill';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
      toast.success("Increase the number of successes");
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      toast.success("Add to cart successfully");
    }
  }
  const onRemove = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter(x => x.id !== product.id))
      toast.warn("Remove from cart");
    } else {
      setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x))
      toast.warn("Reduce the number of successes");
    }
  }

  const itemPrice = cartItems.reduce((a, b) => a + b.price * b.qty, 0);
  const taxPrice = itemPrice * 0.15 / 100;
  const shippingPrice = itemPrice > 30000000 ? 0 : 100000;
  const totalPrice = itemPrice + taxPrice + shippingPrice;


  const [valueNameInput, setValueNameInput] = useState('');
  const typingNameTimeoutRef = useRef(null);
  const handleNameInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
      if (typingNameTimeoutRef.current) {
        clearTimeout(typingNameTimeoutRef.current);
      };
      typingNameTimeoutRef.current = setTimeout(() => {
        setValueNameInput({ [name]: value });
      }, 1500);
    }
  

  const [valueEmailInput, setValueEmailInput] = useState('');
  const typingEmailTimeoutRef = useRef(null);
  const handleEmailInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (typingEmailTimeoutRef.current) {
      clearTimeout(typingEmailTimeoutRef.current);
    };
    typingEmailTimeoutRef.current = setTimeout(() => {
      setValueEmailInput( { [name]: value });
    }, 1500);
  }

  const [valuePhoneInput, setValuePhoneInput] = useState('');
  const typingPhoneTimeoutRef = useRef(null);
  const handlePhoneInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (typingPhoneTimeoutRef.current) {
      clearTimeout(typingPhoneTimeoutRef.current);
    };
    typingPhoneTimeoutRef.current = setTimeout(() => {
      setValuePhoneInput( { [name]: value });
    }, 1500);
  }

  const [valueAddressInput, setValueAddressInput] = useState('');
  const typingAddressTimeoutRef = useRef(null);
  const handleAddressInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (typingAddressTimeoutRef.current) {
      clearTimeout(typingAddressTimeoutRef.current);
    };
    typingAddressTimeoutRef.current = setTimeout(() => {
      setValueAddressInput({ [name]: value });
    }, 1500);
  }

  const submitForm = (e) => {
   
    console.log(e);
  }

  toast.configure();

  return (
    <Router>

      <div className="App">
        <Switch>
          <Route path="/" exact >
            <Home
              onAdd={onAdd}
              cartItems={cartItems}
            />
          </Route>
          <Route path="/contact" ><Contact cartItems={cartItems} /></Route>
          <Route path="/cart" exact >
            <Cart onAdd={onAdd} onRemove={onRemove}
              cartItems={cartItems}
              itemPrice={itemPrice}
              taxPrice={taxPrice}
              shippingPrice={shippingPrice}
              totalPrice={totalPrice}
            />
          </Route>
          <Route path="/cart/bill" exact >
            <Bill
              cartItems={cartItems}
              itemPrice={itemPrice}
              taxPrice={taxPrice}
              shippingPrice={shippingPrice}
              totalPrice={totalPrice}
              
              handleNameInput={handleNameInput}
              
              handlePhoneInput={handlePhoneInput}
             
              handleEmailInput={handleEmailInput}
              
              handleAddressInput={handleAddressInput}
              submitForm = {submitForm}
            />
          </Route>
          <Route path="/cart/bill/exportbill"  >
            <ExportBill
              cartItems={cartItems}
              valueNameInput={valueNameInput}
              valuePhoneInput={valuePhoneInput}
              valueEmailInput={valueEmailInput}
              valueAddressInput={valueAddressInput}
              totalPrice={totalPrice}
            />
          </Route>
          <Route path="/sign-up" exact ><SignIn /></Route>
          <Route path="/" component={ScroollToTop(Navbar)} />
        </Switch>
        <Fragment >
          <ScroollToTop />
        </Fragment>
      </div>

    </Router>
  );
}



export default App;


