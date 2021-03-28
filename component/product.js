import React from "react";

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    console.log("ProductInfo", props);
    this.state = {
      productId: props.productId,
      name: props.name,
      price: props.price,
      addToCart: props.addToCart,
      quantity: 1
    };

    this.handleChange = this.handleChange.bind(this);
    this.buttonHandler = this.buttonHandler.bind(this);
  }

  render() {
    return (
      <div key={this.state.productId}>
        <h1> {this.state.name} </h1>
        <span> price {this.state.price} </span>
        <div>
          <input
            type="number"
            name="number"
            defaultValue="1"
            onChange={this.handleChange}
          />
          <button type="button" onClick={this.buttonHandler}>
            add to cart
          </button>
        </div>
      </div>
    );
  }

  handleChange(event) {
    this.setState({ quantity: parseInt(event.target.value) });
  }

  buttonHandler() {
    window.alert(
      "add " + this.state.quantity + " " + this.state.name + " to cart"
    );

    this.state.addToCart({
      productId: this.state.productId,
      quantity: this.state.quantity
    });
  }
}

export default ProductInfo;
