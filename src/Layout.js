import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
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
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul id="nav-items" className={`flex-container ${navOpen ? "" : "hide"}`}>
                    <li className={splitLocation[1] === "" ? "active" : ""}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={splitLocation[1] === "" ? "active" : ""}>
                        <Link to="/AboutUs">About Us</Link>
                    </li>
                    <li className={splitLocation[1] === "" ? "active" : ""}>
                        <Link to="/ContactUs">Contact Us</Link>
                    </li>
                    <li className={splitLocation[1] === "" ? "active" : ""}>
                        <Link to="/Gallery">Gallery</Link>
                    </li>
                    <li className={splitLocation[1] === "" ? "active" : ""}>
                        <Link to="/Products">Products</Link>
                    </li>
                    <li className={splitLocation[1] === "" ? "active" : ""}>
                        <Link to="/Reviews">Reviews</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />

            <Footer />
        </>
    );
};

export default Layout;
