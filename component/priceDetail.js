import React from "react";
import PropTypes from "prop-types";

class PriceDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      priceDetail: props.groupedPrice.priceDetail,
      name: props.groupedPrice.name,
      quantity: props.groupedPrice.quantity,
      total: props.groupedPrice.total
    };
  }

  render() {
    let discountDerail = [];
    for (let key in this.state.priceDetail) {
      let rule = key || "original price";
      discountDerail.push(
        <p key={rule}>
          rule: {rule}, price: {this.state.priceDetail[key].price}, quantity:{" "}
          {this.state.priceDetail[key].quantity}
        </p>
      );
    }
    return (
      <tr>
        <td>{this.state.name}</td>
        <td>{this.state.quantity}</td>
        <td>{discountDerail}</td>
        <td>{this.state.total}</td>
      </tr>
    );
  }
}

PriceDetail.propTypes = {
  groupedPrice: PropTypes.object
};

export default PriceDetail;
