import React, {Component} from 'react';
import { Link } from "react-router-dom";
// import Api from '../api/localStorageApi';

const ProductList = (props) => {
  // let allProudcts = Api.getAllProducts();
  let products;
  products = props.products.map((product,index)=>{
    return(
      <tr key={index}>
        <td>{product.name}</td>
        <td>
          <Link to={`/products/${product.id}`} className="text-info text-mright">Details</Link>
          <Link to={`/addproduct/${product.id}`} className="text-warning text-mright">Edit</Link>
          <a className="text-danger" href="javascript:void(0)" onClick={() => {props.deleteProductById(product.id)}}>Delete</a>
        </td>
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
          { (products.length > 0) ? products : <tr><td colSpan="2">There are no products</td></tr> }
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;