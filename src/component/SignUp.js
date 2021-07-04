import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './SignUp.css'

function SignIn() {
    return (
        <div>
            <Navbar />
            <div className="main">
                <form action=""  className="form" id="form-1">
                    <h2 className="heading">SIGN UP</h2>
                   

                    <div className="spacer"></div>

                    <div className="form-group">
                        <label for="fullname" className="form-label">Name</label>
                        <input id="fullname" name="fullname" type="text" placeholder="Ex: PhuQuoc" className="form-control" />
                        <span className="form-message"></span>
                    </div>
                    <div className="form-group">
                        <label for="email" className="form-label">Email</label>
                        <input id="email" name="email" type="text" placeholder="Ex: abc@domain.com" className="form-control" />
                        <span className="form-message"></span>
                    </div>
                    <div className="form-group">
                        <label for="password" className="form-label">Password</label>
                        <input id="password" name="password" type="password" placeholder="Password" className="form-control" />
                        <span className="form-message"></span>
                    </div>
                    <div className="form-group">
                        <label for="password_confirmation" className="form-label">Confirm password</label>
                        <input id="password_confirmation" name="password_confirmation" placeholder="Confirm password" type="password" className="form-control" />
                        <span className="form-message"></span>
                    </div>

                    <button className="form-submit">SIGN UP</button>

                </form>
            </div>
            <Footer />
        </div>
    )
}
export default SignIn;