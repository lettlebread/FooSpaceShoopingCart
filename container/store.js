import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProductCard from "../component/productCard.js";

class StoreContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: props.productList
    };
  }

  render() {
    let productList = [];
    for (let key in this.state.productList) {
      productList.push(
        <ProductCard
          productId={key}
          name={this.state.productList[key].name}
          key={key}
        />
      );
    }

    return (
      <div className="store">
        <h1> Product list </h1>
        <div class="cardContainer">{productList}</div>
      </div>
    );
  }
}

StoreContainer.propTypes = {
  productList: PropTypes.object
};

function mapStateToProps(state) {
  return {
    productList: state.product.productList
  };
}

export default connect(mapStateToProps, null)(StoreContainer);
