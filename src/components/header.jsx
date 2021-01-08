import React, {Component} from 'react';
import {BrowserRouter as Router,Link, NavLink, Route} from 'react-router-dom';

const Header = (props) => {
  return(
    <div>
      <div className="text-center">
        <h2>Products React App - Abid Ali. Roll # 2362</h2>
        <p>Saylani Mass Training Program Faisalabad. Batch 01</p>
      </div>
      <hr/>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Products App</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#productsNavbar" aria-controls="productsNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="productsNavbar">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              {/* <a className="nav-link active" href="#">Home</a> */}
              <NavLink exact to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/addproduct" className="nav-link">Add Product</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;