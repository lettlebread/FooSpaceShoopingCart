import { combineReducers } from "redux";

//import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../constants/ActionTypes'

/*const product = (state = database.products, action) => {
  console.log("in products");
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        inventory: state.inventory - 1
      }
    default:
      return state;
  }
};*/

const productList = (state = {}, action) => {
  switch (action.type) {
    case "RECEIVE_PRODUCTS":
      let a = {
        ...state,
        ...action.products
      };
      console.log("productList", a, action);
      return a;
    /*return {
        ...state,
        ...action.products
      };*/
    default:
      return state;
  }
};

export default combineReducers({
  productList
});

export const getProductList = (state) => {
  console.log("getProductList", state.product.productList);
  return state.product.productList;
};
