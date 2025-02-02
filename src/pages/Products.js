import React from 'react';
import "../css/Products.css"; 

const Products = () => {
  return (
    
    <div id="products-page">
      <h1 id="page-heading">Products</h1>

      <div id="products" className="columns">
        <section id="Pallets" className="three">
          <h1>Pallets</h1>
          <ul id="pallets-products">
            <li>48 x 40 - Four Way - NEW</li>
            <li>48 x 40 - 1A grade - USED</li>
            <li>48 x 40 - 1 grade - USED</li>
            <li>48 x 40 - 2 grade - USED</li>
            <li>48 x 40 - 3 grade - USED</li>
            <li>48 x 40 - 4 grade - USED</li>
            <li>40 X 40 - USED</li>
            <li>42 x 42 - USED</li>
          </ul>
        </section>

        <section id="OtherProducts" className="three">
          <h1>Other Products</h1>
          <p>Misc. small shipping pallets</p>
          <p> Custom-sized NEW pallets made to order </p>
          <img id="product-pic" src="MPTimages/pallet.jpg" alt="Pallets" />
        </section>

        <section id="Trucking" className="three">
          <h1>Trucking</h1>
          <p>Local same day service shipping of goods</p>
          <p>Monthly storage trailer leasing available</p>
          <img id="product-pic" src="MPTimages/trailer.jpg" alt="Trucking" />
        </section>
      </div>

      <h1 id="page-heading">Pricing & Delivery</h1>

      <div id="products-1" className="columns">
        <section id="pricing-delivery" className="two">
          <h1>Delivery</h1>
          <p>We only deliver within an 55-mile radius of Brockton, MA</p>
          <p>Delivery charges apply to all orders </p>
          {/* <iframe> https://www.mapdevelopers.com/draw-circle-tool.php?circles=%5B%5B55630.1%2C42.0713399%2C-70.957583%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%5D </iframe> */}
        </section>

        <section id="pricing-delivery" className="two">
          <h1>Pricing</h1>
          <p>We charge $4.00 per pallet to remove</p>
          <p>We charge $85.00 - $250.00 to pick-up or deliver pallets</p>
          <p>Pallet pricing varies based on size and type</p>
        </section>
      </div>
    </div>
  );
};

export default Products;
