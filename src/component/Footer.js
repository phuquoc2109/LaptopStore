import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-top">
                <div>
                    <div className="footer-top-title">Category</div>
                    <ul className="footer-top-body">
                        <li><a href="/">Search</a></li>
                        <li><a href="/">Introduce</a></li>
                        <li><a href="/">policy changes</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Terms of service</a></li>
                    </ul>
                </div>
                <div>
                    <div className="footer-top-title">Blog</div>
                    <ul className="footer-top-body">
                        <li><a href="/">Search</a></li>
                        <li><a href="/">Introduce</a></li>
                        <li><a href="/">policy changes</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Terms of service</a></li>
                    </ul>
                </div>
                <div>
                    <div className="footer-top-title">Contact</div>
                    <ul className="footer-top-body">
                        <li><a href="/">Search</a></li>
                        <li><a href="/">Introduce</a></li>
                        <li><a href="/">policy changes</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Terms of service</a></li>
                    </ul>
                </div>
                <div>
                    <div className="footer-top-title">Information</div>
                    <ul className="footer-top-body">
                        <li><a href="/">Search</a></li>
                        <li><a href="/">Introduce</a></li>
                        <li><a href="/">policy changes</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Terms of service</a></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="footer-body">
                <div className="footer-body-1">
                    <i class="fas fa-home"></i>&nbsp;
                    <div className="footer-body-adress">CN1: 3 Tôn Thất Tùng, Nam Phước, Duy Xuyên, Quảng Nam.
                        CN2: 144/82 Nguyễn Lương Bằng, Hoà Khánh Bắc, Đà Nẵng.</div>
                </div>
                <div className="footer-body-2">
                    <i class="far fa-envelope-open"></i>&nbsp;
                    <div className="footer-body-email">quocduongphu@gmail.com</div>
                </div>
                <div className="footer-body-3">
                    <i class="fas fa-mobile-alt"></i> &nbsp;
                    <div className="footer-body-phone">0916 904 140</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="footer-bottom-1">
                    <img className="footer-img" src="https://theme.hstatic.net/200000031420/1000719377/14/payment-icon.png" alt="" />
                </div>
                <ul className="footer-bottom-2">
                    <li><a href="">SEARCH</a></li>
                    <li><a href="">INTRODUCE</a></li>
                    <li><a href="">POLICY CHANGES</a></li>
                    <li><a href="">PRIVACY POLICY</a></li>
                    <li><a href="">TERMS OF SERVICE</a></li>
                </ul>
                <div className="footer-bottom-3">PQ© 2021</div>
            </div>
        </div>
    )
}
export default Footer;