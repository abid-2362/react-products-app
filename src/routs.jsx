import React from 'react';
import {Router, Link, Route} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import AddProduct from './components/addProduct';
import Products from './components/products';
import SingleProduct from './components/singleProduct';
import Header from './components/header';
const history = createBrowserHistory()

const customRoutes = () => {
  return (
    <Router history={history}>
      <div className="container-fluid">
        <Header/>
        <Route exact path="/" component={Products}/>
        <Route exact path="/products" component={Products}/>
        <Route path="/products/:id" component={SingleProduct}/>
        <Route exact path="/addproduct" component={AddProduct}/>
        <Route path="/addproduct/:id" component={AddProduct}/>
      </div>
    </Router>
  );
}

export default customRoutes;