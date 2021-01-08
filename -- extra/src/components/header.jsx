import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

const Header = (props) => {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Products App</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#productsNavbar" aria-controls="productsNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="productsNavbar">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            {/* <a className="nav-link active" href="#">Home</a> */}
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link">Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/addproduct" className="nav-link">Add Product</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;