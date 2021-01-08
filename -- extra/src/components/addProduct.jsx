import React, {Component} from 'react';
import TextInput from '../common/textInput';

class AddProduct extends Component{
  state = {
    id: '',
    name: '',
    qty: '',
    description: '',
    video: '',
  };

  onChange = (event) => {
    switch(event.target.name){
      case 'name':
        this.state.name = event.target.value;
      break;
      case 'qty':
        this.state.qty = event.target.value;
      break;
      case 'description':
        this.state.description = event.target.value;
      break;
      case 'video':
        this.state.video = event.target.value;
      break;
      default:
        '';
    }
    //this.setState(this.state);
  };

  saveProduct = (event) => {
    event.preventDefault();
    console.log('save product');
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
            // description="Enter product's name"
          />

          <TextInput
            name="qty"
            label="Product Quantity"
            onChange={this.onChange}
          />

          <TextInput
            name="description"
            label="Product Description"
            onChange={this.onChange}
          />

          <TextInput
            name="video"
            label="Video URL from YouTube"
            onChange={this.onChange}
          />
          <button type="button" onClick={this.saveProduct} className="btn btn-success">Save Product</button>
        </form>
      </div>
    );
  }
}

export default AddProduct;