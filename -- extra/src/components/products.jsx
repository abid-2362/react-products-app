import React, {Component} from 'react';
import ProductList from './productList';
import { Route, Link } from "react-router-dom";
import SingleProduct from './singleProduct';
class Products extends Component{
  state = {
    products: [
      {
        id: 1,
        name: 'test Product 1',
        qty: 10,
        description: 'Some nice description',
        video: 'someVideo.mp4',
      },
      {
        id: 2,
        name: 'test Product 2',
        qty: 10,
        description: 'Some nice description',
        video: 'someVideo.mp4',
      },
      {
        id: 3,
        name: 'test Product 3',
        qty: 10,
        description: 'Some nice description',
        video: 'someVideo.mp4',
      },
      {
        id: 4,
        name: 'test Product 4',
        qty: 10,
        description: 'Some nice description',
        video: 'https://www.youtube.com/embed/cbU12Tw7Q4U',
      }

    ]
  };


  render(){
    return(
      <div className="add-product">
        <Route exact={true} path="/products" render={(props) => <ProductList products={this.state.products}/>}/>
        <Route path="/products/:id" render={(props) => <SingleProduct params={props} products={this.state.products} />}/>
      </div>
    );
  }
}

export default Products;