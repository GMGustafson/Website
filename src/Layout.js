import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./css/Layout.css";

const Layout = () => {
    const [navOpen, setNavOpen] = useState(false);


    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    document.addEventListener('DOMContentLoaded', () => {
        const navItems = document.querySelectorAll('#main-nav li');
    
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');
            });
        });
    });

    return (
        <>
            <Header />

            <nav id="main-nav">
                <div id="hamburger" onClick={toggleNav}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul id="nav-items" className={`flex-container ${navOpen ? "" : "hide"}`}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/AboutUs">About Us</Link></li>
                    <li><Link to="/ContactUs">Contact Us</Link></li>
                    <li><Link to="/Gallery">Gallery</Link></li>
                    <li><Link to="/Products">Products</Link></li>
                    <li><Link to="/Reviews">Reviews</Link></li>
                </ul>
            </nav>

            <Outlet />

            <Footer />
        </>
    );
};

export default Layout;
