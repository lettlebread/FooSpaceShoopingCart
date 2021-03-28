import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class ProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      productId: props.productId
    };
  }

  render() {
    return (
      <div>
        <div>
          <li>
            <Link to={`/store/${this.state.productId}`}>{this.state.name}</Link>
          </li>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  productId: PropTypes.string,
  name: PropTypes.string
};

export default ProductCard;
