import _ from 'lodash';
import toastr from 'toastr';

var localStorageAPI = {

  getAllProducts: function() {
    let productsString = localStorage.getItem('products');
    let products = JSON.parse(productsString);
    if(products == null) {
      return [];
    }else {
      return products;
    }
  },

  saveProduct: function(dataObj) {
    let products = this.getAllProducts();
    // check if the product with same id exists
    if( this.getProductById(dataObj.id) ) {
      // find the key of the product in the products list
      let index = products.findIndex( (element) => {
        return element.id = dataObj.id;
      });
      // replace the existing product with new product
      products[index] = dataObj;
    }else{
      products.push(dataObj);
    }
    let productsString = JSON.stringify(products);
    localStorage.setItem('products', productsString);
  },

  saveAllProducts: function(products){
    localStorage.setItem('products', JSON.stringify(products));
  },

  getProductById: function(id) {
    let products = this.getAllProducts();
    let requiredProduct = _.find(products, (product) => (product.id == id), 0);
    return requiredProduct; // returns object or undefined
  },
  /*
  products: [
    {
      id: 1,
      name: 'test Product 1',
      qty: 10,
      description: 'Some nice description',
      video: 'https://www.youtube.com/embed/cbU12Tw7Q4U',
    }
  ]
  */
  deleteProductById: function(id) {
    if (confirm('Are you sure you want to delete this product?')){
      let products = this.getAllProducts();
      let fromIndex = _.findIndex(products, product => (product.id = id), 0);
      products.splice(fromIndex, 1);
      this.saveAllProducts(products);
      toastr.info('Product has been deleted');
    }
  },

  deleteAllProducts: function() {
    localStorage.removeItem('products');
  }

};

export default localStorageAPI;