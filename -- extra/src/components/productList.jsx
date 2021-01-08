import React, {Component} from 'react';
import { Link } from "react-router-dom";

const ProductList = (props) => {
  let products = props.products.map((product,index)=>{
    return(
      <tr key={index}>
        <td>{product.name}</td>
        <td><Link to={`/products/${product.id}`}>Details</Link></td>
      </tr>
    );
  });
  return(
    <div className="add-product">
      <h2>Products</h2>
      <Link to="/addproduct" className="btn btn-primary">Add Product</Link><br /><br/>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th style={{width: '80%'}}>Product Name</th>
            <th style={{width: '20%'}}>Details</th>
          </tr>
        </thead>
        <tbody>
          {products}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;