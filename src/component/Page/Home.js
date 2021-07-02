import React from 'react';
import Navbar from '../Navbar';
import Slideshow from '../Slideshow';
import Products from '../Products';
import Contact from '../Contact';
import Footer from '../Footer';


function Home(props){
    const {onAdd, cartItems} = props;
    return(
        <div>
            <Navbar countCartItems={cartItems.length}/>
            <Slideshow />
            <Products onAdd={onAdd}  />
            <Footer />
        </div>
    )
}
export default Home;