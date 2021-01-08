import React, {Component} from 'react';
import { Route, Link } from "react-router-dom";
import _ from 'lodash';

const SingleProduct = (props) => {
  const { products } = props;
  const { match } = props.params;
  const pId = match.params.id;
  const currentProduct = _.find(products, (product) => (pId == product.id), 0);

  const {name, id, qty, description, video} = currentProduct;
  return(
    <div className="add-product">
      <h2>Product: {name}</h2>
      <Link to="/addproduct" className="btn btn-primary">Add Product</Link><br /><br/>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td>ID:</td>
            <td>{id}</td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Quantity:</td>
            <td>{qty}</td>
          </tr>
          <tr>
            <td>Description:</td>
            <td>{description}</td>
          </tr>
          <tr>
            <td colSpan="2">Video:</td>
          </tr>
          <tr>
            <td colSpan="2">
              {/* <video src={video} height="300" width="300"></video> */}
              <iframe width="560" height="315" src={video} frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SingleProduct;