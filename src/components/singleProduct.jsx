import React, {Component} from 'react';
import { Route, Link } from "react-router-dom";
// import _ from 'lodash';
import Api from '../api/localStorageApi';


const SingleProduct = ({match}) => {
  // const { products } = props;
  // const { match } = props.params;
  const products = Api.getAllProducts();
  const pId = match.params.id;
  // const currentProduct = _.find(products, (product) => (pId == product.id), 0);
  const currentProduct = Api.getProductById(pId);
  const {name, id, qty, description, video} = currentProduct;
  // https://www.youtube.com/watch?v=kp4rDDX_q5s&list=PLLnpHn493BHGACfv4rC29kJamYMtw34D9&index=2
  let videoLink = video.replace("watch?v=", "embed/");
  if ( videoLink.search('&') !== -1 ) {
    // https://www.youtube.com/embed/kp4rDDX_q5s&list=PLLnpHn493BHGACfv4rC29kJamYMtw34D9&index=2
    videoLink = videoLink.match(/(https?:\/\/.+youtube\.com\/embed\/[^&]+)&/)[1];
  }
  // window.vl = videoLink;
  // console.log(videoLink);
  // videoLink = videoLink.replace('&','');
  // https://www.youtube.com/embed/cbU12Tw7Q4U&list=PLLnpHn493BHGACfv4rC29kJamYMtw34D9&index=1
  return(
    <div className="add-product">
      <h2>Product: {name}</h2>
      <Link to="/addproduct" className="btn btn-primary">Add Product</Link>
      <Link to="/" className="btn btn-secondary">Back to product list</Link>
      <br /><br/>
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
              <iframe id="youtubeIframe" src={videoLink} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SingleProduct;