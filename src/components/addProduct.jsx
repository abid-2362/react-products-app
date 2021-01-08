import React, {Component} from 'react';
import TextInput from '../common/textInput';
import Api from '../api/localStorageApi';
import toastr from 'toastr';
import {Link} from 'react-router-dom';

class AddProduct extends Component{
  state = {
    id: this.randomId(),
    name: '',
    qty: '',
    description: '',
    video: '',
  };

  randomId() {
    return Math.floor( 1 + (Math.random() * 15000) );
  }

  onChange = (event) => {
    switch(event.target.name){
      case 'name':
        this.setState({name: event.target.value});
      break;
      case 'qty':
        this.setState({qty: event.target.value});
      break;
      case 'description':
        this.setState({description: event.target.value});
      break;
      case 'video':
        this.setState({video: event.target.value});
      break;
      default:
        '';
    }
  };
  resetErrors = () => {
    return { name: null, qty: null, description: null, video: null };
  };
  hasErrors = this.resetErrors();
  validateForm = () => {
    let hasError = false;
    let nameLength = this.state.name.length;
    if(nameLength < 3 || nameLength > 100) {
      this.hasErrors.name = `Product name must be between 3 to 100 characters, current char count is: (${nameLength})`;
      hasError = true;
    }else{
      this.hasErrors.name = null;
    }

    if( isNaN(parseInt(this.state.qty)) ) {
      this.hasErrors.qty = 'Quantity must be a number';
      hasError = true;
    }else{
      this.hasErrors.qty = null;
    }

    if(this.state.description.length < 1) {
      this.hasErrors.description = 'Description is required';
      hasError = true;
    }else{
      this.hasErrors.description = null;
    }

    if(this.state.video.length < 1) {
      this.hasErrors.video = 'Video is required';
      hasError = true;
    }else {
      this.hasErrors.video = null;
    }
    return hasError;
  };
  componentWillMount = () => {
    if(this.props.match.params.id) {
      let id = this.props.match.params.id;
      let product = Api.getProductById(id);
      this.setState({...product});
    }
  }
  saveProduct = (event) => {
    if(this.validateForm()){ this.setState({}); toastr.error('Error! Please check the form fields'); return; }
    event.preventDefault();
    Api.saveProduct(this.state);
    toastr.success('Product Saved');
    this.setState({ id: this.randomId(), name: '', qty: '', description: '', video: '', });
    this.hasErrors = this.resetErrors();
    this.props.history.push('/'); // now it will redirect back to the home page i.e Products
  }

  render(){
    return(
      <div className="add-product">
        <form className="">
          <h2>Add Product</h2>
          <TextInput
            name="name"
            label="Product Name"
            onChange={this.onChange}
            value={this.state.name}
            error={this.hasErrors.name}
            // description="Enter product's name"
          />

          <TextInput
            name="qty"
            label="Product Quantity"
            onChange={this.onChange}
            value={this.state.qty}
            error={this.hasErrors.qty}
          />

          <TextInput
            name="description"
            label="Product Description"
            onChange={this.onChange}
            value={this.state.description}
            error={this.hasErrors.description}
          />

          <TextInput
            name="video"
            label="Video URL from YouTube"
            onChange={this.onChange}
            value={this.state.video}
            error={this.hasErrors.video}
          />
          <button type="button" onClick={this.saveProduct} className="btn btn-success">Save Product</button>
            <Link to="/" className="btn btn-secondary">Back to products</Link>
        </form>
      </div>
    );
  }
}

export default AddProduct;