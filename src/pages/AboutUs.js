import React from 'react';
import "../css/AboutUs.css"; 

const AboutUs = () => {
    return (
        <div id="about-us">
        <h1 id="page-heading">About Us</h1> 
        <div id="about-us1" className="columns">
           
        <img className="aboutus-pictures" src = "MPTimages/selfie.jpg" />

            <section id="about-us11" className="aboutus-content" > 
                <h3>The Mackin Difference</h3>
                <p id ="font"> At Mackin Pallet & Trucking, we pride ourselves on delivering high-quality pallet solutions backed by exceptional service. Whether you need durable pallets, storage trailers, or containers, we offer a wide range of options available for sale or lease—all tailored to meet your business needs. </p>
                <p id ="font"> With same-day delivery and a commitment to keeping your operations running smoothly, we go the extra mile to ensure your satisfaction.</p>
                <p id ="font">As a family-owned business with over 35 years of experience, our story began with a simple mission: to provide dependable pallet solutions for businesses of every size. While we’ve grown over the decades, our core values—reliability, customer satisfaction, and integrity—remain unchanged. At Mackin, we believe in building strong, lasting relationships by consistently delivering quality products and personalized service you can trust. </p>
            </section>
        </div>

        <div id="about-us2" className="columns">

            <section id="about-us22" className ="aboutus-content"> 
                <h3>Why Choose Us?</h3>
                <p id ="font"> What sets us apart is our unwavering commitment to providing a hassle-free experience. From fast, reliable deliveries to customized storage solutions and attentive customer support, we’re dedicated to exceeding your expectations—because your success drives everything we do.</p>
                <p  id ="font"> We also prioritize sustainability by implementing eco-friendly practices like pallet recycling, reducing waste, and supporting a healthier environment.</p>
                <p  id ="font"> Our team consists of passionate professionals who take pride in their work. As a family-owned business, we bring a personal touch to every interaction, treating each customer like family and building lasting relationships rooted in trust and reliability.</p>
                <p  id ="font"> Experience the difference for yourself. Reach out today with any questions, and let us help you find the solutions you need to keep your business running smoothly.</p>
            </section>

            <img className="aboutus-pictures" src = "MPTimages/papa&truck.jpg" /> 

        </div>
    </div>  
    );
   
};
    
export default AboutUs; 

           
    