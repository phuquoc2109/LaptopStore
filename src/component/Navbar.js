import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(props){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const {countCartItems} = props;

    const handleClick = () => {
        setClick(!click);
    }
    const closeMobileMenu = () => {
        setClick(false);
    }

    // const showButton = () => {
    //     if(window.innerWidth <= 960){
    //         setButton(false)
    //     }else{
    //         setButton(true)
    //     }
    // }
    // useEffect(() => {
    //     showButton()
    // })

    // window.addEventListener('resize', showButton)

    return(
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        PQ <i className="fab fa-typo3" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/cart" className="nav-links noti" onClick={closeMobileMenu}>
                                    Cart <i class="fas fa-shopping-cart"></i>
                                    {countCartItems? (
                                        <button class="badge">{countCartItems}</button>
                                    ) : (
                                        ''
                                    )}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/sign-up" className="nav-links" onClick={closeMobileMenu}>
                                    <i className="fas fa-user"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                                    Sign Up
                                </Link>
                            </li>
                        </ul>
                        
                </div>
            </nav>
        </div>
    )
}
export default Navbar;