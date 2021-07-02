import './App.css';
import Navbar from './component/Navbar';
import SignIn from './component/SignIn';
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


function App() {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      alert("Add to cart successfully");
    }
  }
  const onRemove = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter(x => x.id !== product.id))
    } else {
      setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x))
    }
  }

  const itemPrice = cartItems.reduce((a, b) => a + b.price * b.qty, 0);
  const taxPrice = itemPrice * 0.15 / 100;
  const shippingPrice = itemPrice > 30000000 ? 0 : 100000;
  const totalPrice = itemPrice + taxPrice + shippingPrice;

  const [valueInput, setValueInput] = useState('');
  const typingTimeoutRef = useRef(null);

  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    

    if (typingTimeoutRef.current){
      clearTimeout(typingTimeoutRef.current);
    };
    typingTimeoutRef.current = setTimeout (() =>{
      setValueInput([...valueInput, {[name]:value}]);
    },1500);
  }
  
    
    console.log(valueInput);
  return (
    <Router>

      <div className="App">
        <Switch>
          <Route path="/" exact ><Home onAdd={onAdd} cartItems={cartItems} /></Route>
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
              valueInput={valueInput}
              handleInput={handleInput}
              />
          </Route>
          <Route path="/cart/bill/exportbill"  >
              <ExportBill 
              cartItems={cartItems}
              valueInput={valueInput} 
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


