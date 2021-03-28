import React from "react";
import PropTypes from "prop-types";
import PriceDetail from "./priceDetail";
import { checkout } from "../lib/discountRule";

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItem: props.cartItem,
      checkedData: checkout(props.cartItem, props.productList),
      productList: props.productList
    };

    let groupedPrice = {};

    this.state.checkedData.list.forEach((item) => {
      if (groupedPrice[item.id] === undefined) {
        groupedPrice[item.id] = {
          name: this.state.productList[item.id].name,
          total: item.salePrice,
          quantity: 1,
          priceDetail: {}
        };
      } else {
        groupedPrice[item.id].total += item.salePrice;
        groupedPrice[item.id].quantity++;
      }

      let detailKey = "" || item.hitRule;

      if (!groupedPrice[item.id].priceDetail[detailKey]) {
        groupedPrice[item.id].priceDetail[detailKey] = {
          quantity: 1,
          price: item.salePrice
        };
      } else {
        groupedPrice[item.id].priceDetail[detailKey].quantity++;
      }
    });

    this.state.groupedPrice = groupedPrice;
  }

  render() {
    let priceList = [];
    for (let key in this.state.groupedPrice) {
      priceList.push(
        <PriceDetail key={key} groupedPrice={this.state.groupedPrice[key]} />
      );
    }

    return (
      <div className="cart">
        <h1>Cart detail</h1>
        <div>
          <table>
            <thead>
              <tr>
                <th>name</th>
                <th>quantity</th>
                <th>detail</th>
                <th>subtotal</th>
              </tr>
            </thead>
            <tbody>
              {priceList}
              <tr>
                <td>total</td>
                <td colSpan="3">{this.state.checkedData.total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  cartItem: PropTypes.array,
  productList: PropTypes.object
};

export default Cart;
