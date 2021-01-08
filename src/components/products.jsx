import React, {Component} from 'react';
import ProductList from './productList';
import { Route, Link } from "react-router-dom";
import SingleProduct from './singleProduct';
import {withRouter} from 'react-router-dom';
import Api from '../api/localStorageApi';
class Products extends Component{
  state = {
    products: Api.getAllProducts(),
  };

  deleteProductById = (id) => {
    Api.deleteProductById(id);
    this.setState({products: Api.getAllProducts()});
  }
  render(){
    return(
      <div className="add-product">
        <ProductList products={this.state.products} deleteProductById={this.deleteProductById} />
        {/* <Route exact={true} path="/products" render={(props) => <ProductList products={this.state.products}/>}/>
        <Route path="/products/:id" render={(props) => <SingleProduct params={props} products={this.state.products} />}/> */}
      </div>
    );
  }
}

export default withRouter(Products);