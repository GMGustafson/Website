import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";
import "./css/Layout.css";

const Layout = () => {
    const [navOpen, setNavOpen] = useState(false);
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <>
            <Header />

            <nav id="main-nav">
                <div id="hamburger" onClick={toggleNav}>
                    <img src="/MPTimages/nav-pic.png" alt="hamburger" />
                </div>
                <ul id="nav-items" className={`flex-container ${navOpen ? "" : "hide"}`}>
                    <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/AboutUs" activeClassName="active">About Us</NavLink></li>                
                    <li><NavLink to="/ContactUs" activeClassName="active">Contact Us</NavLink></li>                 
                    <li><NavLink to="/Gallery" activeClassName="active">Gallery</NavLink></li>
                    <li><NavLink to="/Products" activeClassName="active">Products</NavLink></li>
                    <li><NavLink to="/Reviews" activeClassName="active">Reviews</NavLink></li>
                </ul>
            </nav>

            <Outlet />

            <Footer />
        </>
    );
};

export default Layout;
